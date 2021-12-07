const store = require('./store');

function createProduct(data) {
    if(!data.name){
       return Promise.reject('Invalid data');
    }
    return store.create(data);
}

function getProduct(filterProduct){
    return store.get(filterProduct)
}

function updateProduct(data, type){
    if(!data._id || !type ){
        return Promise.reject('Invalid data');
    }
    return store.update(data, type)
}

function deleteProduct(id){
    if(!id){
        return Promise.reject('Invalid data');
    }
    return store.delete(id);
}

module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
}