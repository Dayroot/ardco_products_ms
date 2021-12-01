const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    imgUrls: [{
        type: String,
    }],
    average_reviews: {
        type: Number,
        default: 0
    },
    total_reviews: {
        type: Number,
        default: 0
    },
    userId: {
        type: String,
        required: true,
    },
});

productSchema.post('save', function(doc, next){
    doc.populate('category').then( () => next() );
});

productSchema.post('findOneAndUpdate', function(doc, next){
    doc.populate('category').then( () => next() );
});

const model = mongoose.model('Product', productSchema);
module.exports = model;