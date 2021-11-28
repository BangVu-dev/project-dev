var express = require('express');
var router = express.Router();
var User = require('../app/models/user');
var KhachHang = require('../app/models/KhachHang');
const { mutipleMongooseToObject } = require('../util/mongoose');

// router.get('/', function (req, res, next) {
// 	return res.render('login.ejs');
// });

router.get('/admin', function (req, res, next) {
	return res.render('login.ejs');
});

router.post('/admin', function (req, res, next) {
	//console.log(req.body);
	User.findOne({ username: req.body.username }, function (err, data) {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({ "Success": "Success!" });

			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});
});

router.get('/admin-page', function (req, res, next) {
	console.log("profile");
	User.findOne({ unique_id: req.session.userId }, function (err, data) {
		console.log("data");
		console.log(data);
		if (!data) {
			res.redirect('/');
		} else {
			KhachHang.find({})
				.then(khachhangs => {                
					res.render('adminPage', {
						khachhangs: mutipleMongooseToObject(khachhangs)
					});
				})
				.catch(next);		

		}	
	});
});

router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
		// delete session object
		req.session.destroy(function (err) {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});

module.exports = router;