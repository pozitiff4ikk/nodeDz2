let {produkti} = require('../../baza/baza');


class ProductService {

    getProducts() {
        console.log(produkti);
        return produkti;
    }

    getProduct(name) {
        return produkti.find(elem => elem.name === name);
    }

    createProduct(name,inStock,price){
        produkti.push({name,inStock,price});
    }
    deleteProduct(name) {
        produkti = produkti.filter(elem => elem.name !== name);
    }



}

module.exports = new ProductService()