const mogoose = require('mongoose');

const Product = mogoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    }
}