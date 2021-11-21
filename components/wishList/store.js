const Model = require('./model');

async function createWishList(wishList){
    const newWishList = new Model(wishList);
    return await newWishList.save();
}

async function getWishList(filterWishList){
    return new Promise( (resolve, reject) => {
        let filter = {};
        if(filterWishList){
            filter = { _id: filterWishList };
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

async function updateWishList(data){
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