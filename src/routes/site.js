const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const themdulieu = bodyParser.urlencoded({
    extended: false
})

const siteController = require('../app/controllers/SiteController');

router.post('/', themdulieu, siteController.addData);
router.get('/', siteController.index);

module.exports = router;
