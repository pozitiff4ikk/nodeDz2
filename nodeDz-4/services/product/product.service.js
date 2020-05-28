const db = require('../../dataBase').getInstance();


class ProductService {

    getProducts() {
        const UserModel = db.getModel('Product');
        return UserModel.findAll({})
    }

    getProduct(id) {
        const ProductModel = db.getModel('Product');
        return ProductModel.findByPk(id)
    }

    createProduct(name,inStock,price){
        const ProductModel = db.getModel('Product');
        ProductModel.create({name,inStock,price})
    }
    deleteProduct(id) {
        const ProductModel = db.getModel('Product');
        ProductModel.destroy({
            where: {
                id
            }
        })
    }
    updateProduct(id,name,inStock,price) {
    const ProductModel = db.getModel('Product');
    ProductModel.update({name, price}, {
        where: {
            id
        }
    })
    }


}

module.exports = new ProductService()