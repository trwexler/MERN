const Product = require('../models/product.model');

module.exports = {

    createNewProduct: (request, response) =>{
        Product.create(request.body)
        .then((newProduct)=>{
            console.log(newProduct);
            response.json(newProduct);
        })
        .catch((err)=>{
            console.log("CRUD command failed", err);
            response.json(err);
        })
    },

    removeProduct: (request, response) =>{
        Product.remove({_id: request.params})
        .then((deletedProduct)=>{
            console.log(deletedProduct);
            response.json(deletedProduct);
        })
        .catch((err)=>{
            console.log("CRUD command failed", err);
            response.json(err);
        })
    },

    viewAllProducts: (request, response) =>{
        Product.find({})
        .then((allProducts)=>{
            console.log("problem all products");
            response.json(allProducts);
        })
        .catch((err)=>{
            console.log("CRUD command failed",err);
            response.json(err);
        })
    },


    viewOneProduct: (request, response) =>{
        Product.findOne({_id: request.params})
        .then((oneProduct)=>{
            console.log(oneProduct);
            response.json(oneProduct);
        })
        .catch((err)=>{
            console.log("CRUD command failed",err);
            response.json(err);
        })
    }


}



































// const Product = require('../models/product.model');    /* this is new */



// module.exports = {
//     createProduct: (request, response) => {
//         const { product, price, description } = request.body;
//         Product.create({
//             product,
//             price, 
//             description
//         })
//             .then(product => response.json(product))
//             .catch(err => response.json(err));
//     },

//     view: (request, response) => {
//         Product.find({})
//         .then( (allProducts) => {
//           console.log(allProducts);
//           response.json(allProducts);
//         })
//         .catch((err) => {
//           console.log(err);
//           response.json(err);
//         })
//     }
// }

