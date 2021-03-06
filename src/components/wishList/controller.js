const store = require('./store');

function createWishList(data) {
    return store.create(data);
}

function getWishList(filterWishList){
    return store.get(filterWishList)
}

function updateWishList(data, query){
    if(!query || !data){
        return Promise.reject('Invalid data');
    }
    return store.update(data, query)
}

function deleteWishList(id){
    return store.delete(id);
}

module.exports = {
    createWishList,
    getWishList,
    updateWishList,
    deleteWishList,
}