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

shoppingCartSchema.post('save', function(doc, next){
    doc.populate({ path:'products', populate: { path: 'product', populate: { path: 'category' } } }).then( () => next() );
});

const model = mongoose.model('ShoppingCart', shoppingCartSchema);
module.exports = model;