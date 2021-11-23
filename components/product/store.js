const Model = require('./model');

async function createProduct(product){
    const newProduct = new Model(product);
    return await newProduct.save();
}

async function getProduct(filterProduct){
    return new Promise( (resolve, reject) => {
        let filter = {};
        if(filterProduct){
            filter = { _id: filterProduct.id };
        }
        Model.find( filter)
            .populate('category')
            .exec( (error, populated) => {
                if(error){
                    return reject(error);
                }
                resolve(populated)
            });
    })
}

async function updateProduct(data){
    
    const result = await Model.findOneAndUpdate(
        { _id: data._id },
        data,
        { new: true }
    );

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