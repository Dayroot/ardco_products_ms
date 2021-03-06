const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: null,
    }
    
});

const model = mongoose.model('Category', categorySchema);
module.exports = model;