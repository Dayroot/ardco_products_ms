const Model = require('./model');

async function createProduct(product){
    const newProduct = new Model(product);
    return await newProduct.save();       
}

async function getProduct(filterProduct){     
    return await Model.find( filterProduct );           
}

async function updateProduct(data, type){
    let result;

    if(type == "normal-update"){
        result = await Model.findOneAndUpdate(
            { _id: data._id },
            data,
            { new: true }
        );
    }
    else if( type == "update-review"){

        let product = (await Model.findOne({ _id: data._id }));
        if(!product)
            return Promise.reject('Id not valid');
        else
            var numb = ((product.average_reviews*product.total_reviews) + data.review)/(product.total_reviews + 1);
            product.average_reviews = Math.round((numb + Number.EPSILON) * 10) / 10;
            product.total_reviews += 1;
            product.category = String(product.category);

        result = await product.save();
    }
    if(!result){
        return Promise.reject('Id not valid');
    }
    return result
}

async function deleteProduct(id){
    const productDeleted = await Model.deleteOne( { _id: id } );
    if(!productDeleted){
        return Promise.reject('Id not valid');
    }
    return productDeleted
}

module.exports = {
    create: createProduct,
    get: getProduct,
    update: updateProduct,
    delete: deleteProduct,
}