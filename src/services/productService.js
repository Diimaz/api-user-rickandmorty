const { productModel } = require('../models')

const getProducts = () => {
    const allProducts = productModel.find({})
    return allProducts
}

const getProduct = () => {
    
}

const createProduct = (data) => {
    const product = productModel.create(data)
    return product
}


module.exports = {getProducts, getProduct, createProduct}