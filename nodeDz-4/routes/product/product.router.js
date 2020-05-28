const {Router} = require('express');
const {productController} = require('../../controllers')
const {isProductValid} = require('../../middlewares/product/is.product.valid.middleware')

const productRouter = Router();


productRouter.get('/',productController.getProducts);

productRouter.get('/:name',isProductValid,productController.getProduct);

productRouter.post('/',productController.createProduct);

productRouter.put('/',isProductValid,productController.updateProduct);

productRouter.delete('/',productController.deleteProduct)


module.exports = productRouter;