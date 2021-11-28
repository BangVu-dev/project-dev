const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');
const bodyParser = require('body-parser')

const themdulieu = bodyParser.urlencoded({
    extended: false
})

router.put('/:id/', adminController.updateOrder);
router.put('/delivery/:id/', adminController.updateDelivery);
router.post('/filter', themdulieu, adminController.updateFilter);

module.exports = router;