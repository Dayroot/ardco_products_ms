const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    }
    
});

const model = mongoose.model('Category', categorySchema);
module.exports = model;