module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            inStock: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'products',
            timestamps: false
        })


    return Product;
};