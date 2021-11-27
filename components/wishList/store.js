const Model = require('./model');

async function createWishList(wishList){
    const newWishList = new Model(wishList);
    return await newWishList.save();
}

async function getWishList(filterWishList){
    return new Promise( (resolve, reject) => {
    
        Model.find( filterWishList )
            .populate({ 
                path:'products', 
                populate: { 
                    path: 'category' 
                } 
            })
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
    if(!wishList)
        return Promise.reject('Id not valid');
    
    const index = wishList.products.indexOf(data.product);

    if(query.type == 'updateProduct'){
        if(index==-1) 
            wishList.products.push(data.product);
    }
    else if(query.type == 'deleteProduct' && index!=-1)
        wishList.products.splice(index,1)
    else
        return Promise.reject('Invalid operation type');
    
    return await wishList.save()
}

async function deleteWishList(userId){
    return await Model.deleteOne( userId );
}

module.exports = {
    create: createWishList,
    get: getWishList,
    update: updateWishList,
    delete: deleteWishList,
}