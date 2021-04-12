const ProductController= require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api", ProductController.viewAllProducts);
    app.post("/api/product", ProductController.createNewProduct);
}







































// const ProductController = require("../controllers/product.controller");

// module.exports = (app) =>{
//     app.get('/api', ProductController.view);
//     app.post('/api/product', ProductController.createProduct);
// }