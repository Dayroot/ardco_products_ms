const store = require('./store');

function createShoppingCart(data) {
    if(!data.userId){
       return Promise.reject('Invalid data');
    }
    return store.create(data);
}

function getShoppingCart(filterShoppingCart){
    return store.get(filterShoppingCart)
}

function updateShoppingCart(data, query){
    if(!query){
        return Promise.reject('Invalid data');
    }
    return store.update(data, query)
}

function deleteShoppingCart(userId){
    return store.delete(userId);
}

module.exports = {
    createShoppingCart,
    getShoppingCart,
    updateShoppingCart,
    deleteShoppingCart,
}