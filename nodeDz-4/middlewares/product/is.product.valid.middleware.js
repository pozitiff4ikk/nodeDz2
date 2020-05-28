module.exports = (req, res, next) => {
    try {
        const {name, inStock, price} = req.body;

        if (name.length > 20) {
            throw new Error('name is not valid!');
        }


        if(inStock < 0){
            throw new Error('inStock is not valid!');
        }

        if(price < 0){
            throw new Error('Price is not valid!');
        }


        next();

    } catch (e) {
        res.json({message: e.message})
    }
}