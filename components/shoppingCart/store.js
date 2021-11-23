const Model = require('./model');

async function createShoppingCart(shoppingCart){
    const newShoppingCart = new Model(shoppingCart);
    return await newShoppingCart.save();
}

async function getShoppingCart(filterShoppingCart){
    return new Promise( (resolve, reject) => {
        let filter = {};
        if(filterShoppingCart){
            filter = { _id: filterShoppingCart.id };
        }
        Model.find( filter)
            .populate('products')
            .exec( (error, populated) => {
                if(error){
                    return reject(error);
                }
                resolve(populated)
            });
    })
}

async function updateShoppingCart(data, type){
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

async function deleteShoppingCart(id){
    const shoppingCartDeleted = await Model.deleteOne( { _id: id } );
    if(!shoppingCartDeleted){
        return Promise.reject('Id not valid');
    }
    return shoppingCartDeleted
}

module.exports = {
    create: createShoppingCart,
    get: getShoppingCart,
    update: updateShoppingCart,
    delete: deleteShoppingCart,
}