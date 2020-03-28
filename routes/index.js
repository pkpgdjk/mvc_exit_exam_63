var express = require('express');
var router = express.Router();
const Product = require('../models/product')

/* GET home page. */
router.get('/', async function(req, res, next) {
    const products = await Product.find().lean();
    console.log(products)
    res.render('index', { title: 'Express', products: products });
});


router.get('/add_product', async function(req, res, next) {
    const payload = {
        name: "test product",
        price: 200
    };
    const product = new Product(payload)
    await product.save();
    res.redirect("/");
    // res.render('index', { title: 'Express', view:req.session.views });
});

module.exports = router;
