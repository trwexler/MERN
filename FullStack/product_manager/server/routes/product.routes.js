const ProductController= require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api/product", ProductController.viewAllProducts);

    app.get("/api/product/:_id", ProductController.viewOneProduct);

    app.post("/api/product", ProductController.createNewProduct);

    app.delete("/api/product/:_id", ProductController.removeProduct);
}
