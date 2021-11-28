const Course = require('../models/Course');
const Product = require('../models/Product');
const KhachHang = require('../models/KhachHang');

const { mutipleMongooseToObject } = require('../../util/mongoose');
// const { mutipleMongooseToObject } = require('../../template/index');


class SiteController {
    // [GET] /
    index(req, res, next) {

        KhachHang.find({})
            .then(khachhangs => {                
                res.render('home', {
                    khachhangs: mutipleMongooseToObject(khachhangs)
                });
            })
            .catch(next);

    }

    addData(req, res, next) {

        const khachhang = new KhachHang(req.body);
        khachhang.save()
            .then(() => res.redirect(`/?thanks=true&payol=${req.body.payMethod}&gender=${req.body.gender}&name=${req.body.name}`))
            .catch(next);

    }
   
}

module.exports = new SiteController();
