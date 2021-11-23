const store = require('./store');

function createShoppingCart(data) {
    if(!data.name){
       return Promise.reject('Invalid data');
    }
    return store.create(data);
}

function getShoppingCart(filterShoppingCart){
    return store.get(filterShoppingCart)
}

function updateShoppingCart(data, type){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data, type)
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