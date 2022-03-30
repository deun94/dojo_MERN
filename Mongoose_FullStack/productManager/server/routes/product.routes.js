const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    //finding all
    app.get('/api/products', ProductController.findAllProducts);
    //find one by id
    app.get('/api/products/:id', ProductController.findOneProduct);
    //update one by id
    app.put('/api/products/:id', ProductController.updateProduct);
    //create new product
    app.post('/api/products', ProductController.createNewProduct);
    //delete one by id
    app.delete('/api/products/:id', ProductController.deleteProduct);
}
