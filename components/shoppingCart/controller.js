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
    if(!query || !data){
        return Promise.reject('Invalid data');
    }
    return store.update(data, query)
}

function deleteShoppingCart(id){
    if(!id){
        return Promise.reject('Invalid data');
    }
    return store.delete(id);
}

module.exports = {
    createShoppingCart,
    getShoppingCart,
    updateShoppingCart,
    deleteShoppingCart,
}