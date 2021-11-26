const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [{
            product: {
                type: Schema.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default:1
            }
        }],
});

const model = mongoose.model('ShoppingCart', shoppingCartSchema);
module.exports = model;