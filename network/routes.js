const express = require('express');
const category = require('../components/category/network');
const product = require('../components/product/network');
const shoppingCart = require('../components/shoppingCart/network');

const routes = function(server){
    server.use('/category', category);
    server.use('/product', product);
    server.use('/shopping-cart', shoppingCart);
}


module.exports = routes;