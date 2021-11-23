const category = require('../components/category/network');
const product = require('../components/product/network');
const shoppingCart = require('../components/shoppingCart/network');
const wishList = require('../components/wishList/network');
const publication = require('../components/publication/network');
const question = require('../components/question/network');
const review = require('../components/review/network');
const purchase = require('../components/purchase/network');

const routes = function(server){
    server.use('/category', category);
    server.use('/product', product);
    server.use('/shopping-cart', shoppingCart);
    server.use('/wish-list', wishList);
    server.use('/publication', publication);
    server.use('/question', question);
    server.use('/review', review);
    server.use('/purchase', purchase);
}

module.exports = routes;