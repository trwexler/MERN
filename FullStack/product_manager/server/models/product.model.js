const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product: {type : String},
    price: {type : String},
    description: {type : String}
});


module.exports = mongoose.model('Product', ProductSchema);



































// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     product: {type: String},
//     price: {type: String},
//     description: {type: String}
// },{timestamps : true});


// module.exports = mongoose.model('Product', ProductSchema);