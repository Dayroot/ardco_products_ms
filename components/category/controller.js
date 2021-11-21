const store = require('./store');

function addCategory(data) {
    if(!data.name){
       return Promise.reject('Invalid data');
    }
    return store.add(data);
}

function getCategory(filterCategory){
    return store.get(filterCategory)
}

function updateCategory(data){
    if(!data._id){
        return Promise.reject('Invalid data');
    }
    return store.update(data)
}

function deleteCategory(id){
    if(!id){
        return Promise.reject('Invalid data');
    }
    return store.delete(id);
}

module.exports = {
    addCategory,
    getCategory,
    updateCategory,
    deleteCategory,
}