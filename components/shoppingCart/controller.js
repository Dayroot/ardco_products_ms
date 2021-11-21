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

function updateShoppingCart(data){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data)
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