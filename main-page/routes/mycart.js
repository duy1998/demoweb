var express = require('express');
var router = express.Router();
var cart_controller = require('../controllers/mycart.js');

router.get('/',cart_controller.get_page);

router.get('/applycoupon', cart_controller.apply_coupon);

router.get('/update', cart_controller.update);



module.exports = router;
