const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type : String,
        minlength: [3, "Name Must be at least 3 characters"] 
    },
    price: {
        type : Number,
        min: 1,
        required: true
    },
    description: {
        type : String,
        minlength: 3,
        required: true
    }
}); 


module.exports = mongoose.model('Product', ProductSchema);



































// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     product: {type: String},
//     price: {type: String},
//     description: {type: String}
// },{timestamps : true});


// module.exports = mongoose.model('Product', ProductSchema);