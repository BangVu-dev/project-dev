const KhachHang = require('../models/KhachHang');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {        

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
    
}

module.exports = new NewsController();
