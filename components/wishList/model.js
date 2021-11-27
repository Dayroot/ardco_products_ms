const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishListSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [{
        type: Schema.ObjectId,
        ref: 'Product'
    }],
});

wishListSchema.post('save', function(doc, next){
    doc.populate({ path:'products', populate: { path: 'category' } }).then( () => next() );
});

const model = mongoose.model('WishList', wishListSchema);
module.exports = model;