const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res){
    controller.createShoppingCart(req.body)
        .then( data => {
            response.success(req, res,{"successful create": data}, 201);
        })
        .catch(e => {
            response.error(req, res, "The data is not valid", 400, e);
        });
});

router.get('/:id', function(req, res){
    controller.getShoppingCart(req.params.id)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, "Unexpected error", 500, e);
        });
});

router.get('/', function(req, res){
    controller.getShoppingCart()
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, "Unexpected error", 500, e);
        });
});

router.patch('/', function(req, res){
    controller.updateShoppingCart(req.body, req.query.type)
    .then( data => {
        response.success(req, res, data, 200);
    })
    .catch( e => {
        response.error(req, res, "Unexpected error", 500, e);
    });
});

router.delete('/:id', function(req, res){
    controller.deleteShoppingCart(req.params.id)
        .then( data => {
            response.success(req, res, data, 200);
        })
        .catch( e => {
            response.error(req, res, "unexpected error", 500, e);
        });
});

module.exports = router;