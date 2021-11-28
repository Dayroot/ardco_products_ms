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

function updateProduct(data){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data)
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