const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true },
    branch: { type: String, required: true}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);