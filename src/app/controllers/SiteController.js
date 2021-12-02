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
        if (!req.body.name || !req.body.gender || !req.body.email || !req.body.address || !req.body.phoneNumber
            || !req.body.quantity || !req.body.payMethod) {
            res.redirect('back');
        } else {
            khachhang.save()
            .then(() => res.redirect(`/?thanks=true&payol=${req.body.payMethod}&gender=${req.body.gender}&name=${req.body.name}`))
            .catch(next);
        }

    }

}

module.exports = new SiteController();
