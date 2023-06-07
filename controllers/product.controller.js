
const productModel = require('../models/product.schema');


const products =async (req, res) => {
  const { name, price, description } = req.body;
  const test = await new productModel({name, price, description}).save();
  res.status(200).json({
    test
  });
};

module.exports = products;



