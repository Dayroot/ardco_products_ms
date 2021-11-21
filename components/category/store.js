const Model = require('./model');

async function createCategory(category){
    const newCategory = new Model(category);
    return await newCategory.save();
}

async function getCategory(filterCategory){
    let filter = {};
    if(filterCategory){
        filter = { _id: filterCategory };
    }
    return await Model.find(filter)
}

async function updateCategory(data){
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

async function deleteCategory(id){
    const categoryDeleted = await Model.deleteOne( { _id: id } );
    if(!categoryDeleted){
        return Promise.reject('Id not valid');
    }
    return categoryDeleted
}

module.exports = {
    create: createCategory,
    get: getCategory,
    update: updateCategory,
    delete: deleteCategory,
}