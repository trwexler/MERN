const ProductController= require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api/product", ProductController.viewAllProducts);

    app.post("/api/product", ProductController.createNewProduct);

    app.get("/api/product/:_id", ProductController.viewOneProduct);

    app.delete("/api/product/:_id", ProductController.removeProduct);

    app.put("/api/product/:_id", ProductController.updateOneProduct);
}
