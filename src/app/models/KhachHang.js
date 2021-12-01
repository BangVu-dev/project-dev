const mongoose = require('mongoose');
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
}, {
    timestamps: true,
});

module.exports = mongoose.model('KhachHang', KhachHang);