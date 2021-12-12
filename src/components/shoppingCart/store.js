const Model = require('./model');

async function createShoppingCart(shoppingCart){
    const newShoppingCart = new Model(shoppingCart);
    return await newShoppingCart.save();
}

async function getShoppingCart(filterShoppingCart){
    return new Promise( (resolve, reject) => {

        Model.find( filterShoppingCart )
            .populate({ 
                path:'products',
                populate: { path: 'product' , populate: { path: 'category' }}
            })
            .exec( (error, populated) => {
                if(error){
                    return reject(error);
                }
                resolve(populated)
            });
    })
}

async function updateShoppingCart(data, query){
    let index = null;
    let shoppingCart = (await Model.findOne({ userId: query.userId }));

    if(!shoppingCart)
        return Promise.reject('Id not valid');
    if(data){
        shoppingCart.products.forEach( (productObj, i) => {
            if( productObj.product == data.product){
                index = i;
            }
        });
    }
    if(query.type == 'updateProduct'){

        if( index == null )
            shoppingCart.products.push(data);

        else if ( data.quantity > 0 )
            shoppingCart.products[index].quantity = data.quantity    
    }
    
    else if(query.type == 'deleteProduct' && index !=null)
        shoppingCart.products.splice(index,1);
      
    else if(query.type == 'resetShoppingCart')
        shoppingCart.products = [];
    
    else if(query.type == 'masiveUpdateCartProducts')
        shoppingCart.products = data.products;
    else
        return Promise.reject('Invalid operation type');
    
    return await shoppingCart.save()
}

async function deleteShoppingCart(userId){
    return await Model.deleteOne( userId );

}

module.exports = {
    create: createShoppingCart,
    get: getShoppingCart,
    update: updateShoppingCart,
    delete: deleteShoppingCart,
}