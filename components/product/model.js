const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default:0
    },
    stock: {
        type: Number,
        default:0
    },
    sold: {
        type: Number,
        default:0
    },
    category: {
        type: Schema.ObjectId,
        default: 'undefined',
        ref: 'Category'
    },
    imgUrl: [{
        type: String,
    }],
});

const model = mongoose.model('Product', mySchema);
module.exports = model;