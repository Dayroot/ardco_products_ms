const Model = require('./model');

async function createWishList(wishList){
    const newWishList = new Model(wishList);
    return await newWishList.save();
}

async function getWishList(filterWishList){
    return new Promise( (resolve, reject) => {
    
        Model.find( filterWishList )
            .populate('products')
            .exec( (error, populated) => {
                if(error){
                    return reject(error);
                }
                resolve(populated)
            });
    })
}

async function updateWishList(data, query){
    let wishList = await Model.findOne({ userId: query.userId });
    if(!wishList){
        return Promise.reject('Id not valid');
    }
    const index = wishList.products.indexOf(data.product);
    if(query.type == 'add'){
        if(index==-1) 
            wishList.products.push(data.product);
    }
    else if(query.type == 'delete' && index!=-1){
        wishList.products.splice(index,1)
    }else{
        return Promise.reject('Invalid operation type');
    }
    return await wishList.save()
}

async function deleteWishList(id){
    const wishListDeleted = await Model.deleteOne( { _id: id } );
    if(!wishListDeleted){
        return Promise.reject('Id not valid');
    }
    return wishListDeleted
}

module.exports = {
    create: createWishList,
    get: getWishList,
    update: updateWishList,
    delete: deleteWishList,
}