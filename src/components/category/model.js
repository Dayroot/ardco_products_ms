const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featuresSchema =new Schema({
    color: {
        type: String,
        default: null,
    },
    material: {
        type: String,
        default: null,
    },
    craftType: {
        type: String,
        default: null,
    },
    department: {
        type: String,
        default: null,
    },
});

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    features:{
        type: featuresSchema,
        default: null,
    }

});

const model = mongoose.model('Category', categorySchema);
module.exports = model;