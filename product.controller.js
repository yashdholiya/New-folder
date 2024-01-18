

// const products=require('../public/product.json');
const Product = require('../models/product.model');

exports.addProduct = async (req, res) => {
    // console.log(req.body);
    let newProduct = await Product.create({ ...req.body });
    newProduct.save();
    res.json({ product: newProduct, message: 'Product Added...' });

};

exports.getAllProduct = async (req, res) => {
    let products = await Product.find();
    res.json(products);
};



exports.getProduct = async (req, res) => {
    let id = req.query.productId;
    // let product = await Product.findOne({_id: id}); let product = await Product.findById(id);
    if (!product) {
    }
    return res.json({ message: 'Product is not found' })
    let showProduct = {
        id: product._id,
        title: product.title
    }
    res.json({ product: showProduct });
};

exports.updateProduct = async (req, res) => {
    let id = req.query.productId;
    let product = await Product.findById(id);
    if (!product) {
    }
    return res.json({ message: 'Product is not found' })
    product = await Product.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true }),
        // product = await Product.findOneAndUpdate( { _id: product._id }, 
        { new: true }
    res.json({ product, message: 'Product is Updated....' });
};

exports.deleteProduct = async (req, res) => {

let id = req.query.productId;
let product = await Product.findById(id);
if (!product) {
}
return res.json({ message: 'Product is not found' })
// product = await Product.findOneAndDelete({_id: id}); product = await Product.findByIdAndDelete(id);
res.json({ product, message: 'Product is Deleted....' });
};