const KhachHang = require('../models/KhachHang');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
    
    index(req, res, next) {
        
        let admin = Account.find({});
        let listKhachHang = KhachHang.find({});        

        Promise.all([admin, listKhachHang])
            .then(([admins, khachhangs]) =>
                {
                    admins: mutipleMongooseToObject(admins)            
                    admins.forEach(admin => {
                        if (admin.name == req.body.name && admin.password == req.body.password) {
                            res.render('adminPage', {
                                khachhangs: mutipleMongooseToObject(khachhangs)                                
                            })                                                                       
                        } else {
                            res.redirect('back')
                        }
                    }) 
                }                                        
            )
            .catch(next)

    }

    updateOrder(req, res, next) {                
        KhachHang.updateOne({ _id: req.params.id }, {$set: {status: true}})
            .then(() => res.redirect('back'))
            .catch(next)
            
    }

    updateDelivery(req, res, next) {
        KhachHang.updateOne({ _id: req.params.id }, { $set: { condition: true } })
            .then(() => res.redirect('back'))
            .catch(next)

    }

    updateFilter(req, res, next) {

        let arrFilter = [];
        KhachHang.find({})
            .then(khachHangs => {
                khachHangs: mutipleMongooseToObject(khachHangs)
                khachHangs.forEach(khachHang => {
                    if (Date.parse(khachHang.createdAt) >= Date.parse(req.body.startDay) && Date.parse(khachHang.createdAt) <= (Date.parse(req.body.endDate))) {
                        arrFilter.push(khachHang)
                    }
                })
                JSON.parse(JSON.stringify(arrFilter));

                res.render('filter-date', {
                    arrFilter: mutipleMongooseToObject(arrFilter),
                });

            })
            .catch(next);

    }

    page(req, res, next) {
        
        Account.find({})
            .then(courses => {                
                res.render('admin', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);

    }
    
}

module.exports = new NewsController();
