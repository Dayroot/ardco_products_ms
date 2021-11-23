const Model = require('./model');

async function createShoppingCart(shoppingCart){
    const newShoppingCart = new Model(shoppingCart);
    return await newShoppingCart.save();
}

async function getShoppingCart(filterShoppingCart){
    return new Promise( (resolve, reject) => {
        let filter = {};
        if(filterShoppingCart){
            filter = { userId: filterShoppingCart.userId };
        }
        Model.find( filter)
            .populate({ 
                path:'products',
                populate: { path: 'product' }
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

    if(!shoppingCart){
        return Promise.reject('Id not valid');
    }

    shoppingCart.products.forEach( (productObj, i) => {
            if( productObj.product == data.product){
                index = i;
            }
        });

    if(query.type == 'add'){
        if(index == null){
            shoppingCart.products.push({ product:data.product, quantity:1});
        }else{
            shoppingCart.products[index].quantity += 1;
        }
    }
    
    else if(query.type == 'delete' && index !=null){
        shoppingCart.products.splice(index,1);
    }
    
    else if(query.type == 'decrease' && index !=null){
        if(shoppingCart.products[index].quantity > 1)
            shoppingCart.products[index].quantity -= 1;
    }

    else{
        return Promise.reject('Invalid operation type');
    }

    return await shoppingCart.save()
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