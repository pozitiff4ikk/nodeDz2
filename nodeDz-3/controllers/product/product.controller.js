const {productService} = require('../../services')
let {produkti} = require('../../baza/baza');

module.exports = {
    getProducts: (req, res) => {
        const allProducts = productService.getProducts();
        res.json(allProducts)
    },
    getProduct: (req, res) => {
        const {name} = req.params;
        const product = productService.getProduct(name);
        res.json(product)

    },

    createProduct: (req, res) => {
        const {name, inStock, price} = req.body;

        productService.createProduct(name, inStock, price);

        res.json(produkti);
    },

    updateProduct: (req, res) => {
        res.end('put')
    },

    deleteProduct: (req, res) => {
        const {name} = req.params;
        productService.deleteProduct(name);

        res.json(produkti)
    }


};
