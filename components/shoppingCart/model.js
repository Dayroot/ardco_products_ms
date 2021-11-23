const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    products: [{
        product: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        quantity:{
            type: Number,
            default:1
        }
    }],
});

const model = mongoose.model('ShoppingCart', mySchema);
module.exports = model;