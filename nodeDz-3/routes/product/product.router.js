const {Router} = require('express');
const {productController} = require('../../controllers')
const {isProductValid} = require('../../middlewares')

const productRouter = Router();


productRouter.get('/',productController.getProducts);

productRouter.get('/:name',isProductValid,productController.getProduct);

productRouter.post('/',productController.createProduct);

productRouter.put('/',productController.updateProduct);

productRouter.delete('/',productController.deleteProduct)


module.exports = productRouter;