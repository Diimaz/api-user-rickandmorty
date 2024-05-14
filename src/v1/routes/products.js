const express = require('express')
const router = express.Router()
const {validatorCreateProduct} = require('../../validators/productValidator')
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../../controllers/ProductController')

router
    .get('/', getProducts)
    .post('/', validatorCreateProduct,createProduct)

module.exports = router