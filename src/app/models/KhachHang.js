const mongoose = require('mongoose');
var current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds(), current.getMilliseconds()));
const Schema = mongoose.Schema;

const KhachHang = new Schema({
    name: { type: String },
    gender: { type: String },
    email: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    quantity: { type: Number },
    payMethod: { type: String },
    status: { type: Boolean, default: false }, 
    condition: { type: Boolean, default: false },
    createdAt: { type: Date, default: timeStamp },
    updatedAt: { type: Date, default: timeStamp }
});

module.exports = mongoose.model('KhachHang', KhachHang);