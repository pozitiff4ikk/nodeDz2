const {productService} = require('../../services')

module.exports = {
    getProducts: (req, res) => {
        const allProducts = productService.getProducts();
        res.json(allProducts)
    },
    getProduct: (req, res) => {
        const {id} = req.params;
        const product = productService.getProduct(+id);
        res.json(product)

    },

    createProduct: (req, res) => {
        const {name, inStock, price} = req.body;

        productService.createProduct(name, inStock, price);

        res.json();
    },

    updateProduct: (req, res) => {
        const {id, name, inStock, price} = req.body;
        productService.updateProduct(id, name, inStock, price)

        res.json()
    },

    deleteProduct: (req, res) => {
        const {id} = req.params;
        productService.deleteProduct(+id);

        res.json()
    }


};
