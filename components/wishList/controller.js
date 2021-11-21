const store = require('./store');

function createWishList(data) {
    if(!data.name){
       return Promise.reject('Invalid data');
    }
    return store.create(data);
}

function getWishList(filterWishList){
    return store.get(filterWishList)
}

function updateWishList(data){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data)
}

function deleteWishList(id){
    if(!id){
        return Promise.reject('Invalid data');
    }
    return store.delete(id);
}

module.exports = {
    createWishList,
    getWishList,
    updateWishList,
    deleteWishList,
}