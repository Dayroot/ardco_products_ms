const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    products: [{
        type: Schema.ObjectId,
    }],
});

const model = mongoose.model('WishList', mySchema);
module.exports = model;