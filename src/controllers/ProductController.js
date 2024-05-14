const productService = require('../services/productService') 
const { handleHttpError } = require('../helpers/handleHttpError')
const { matchedData } = require('express-validator')

const getProducts = async (req, res) => {
    try{
        const data = await productService.getProducts()
        res.send({data})
    }catch(e){
        handleHttpError(res, 'Error GET products')
    }
}

const getProduct = (req, res) => {

}

const createProduct = async (req, res) => {

    try{
        const body = matchedData(req)
        const createProduct = await productService.createProduct(body);
        res.status(200).send({createProduct});
    }catch(e){
        handleHttpError(res,'Error create product')
    }
}

const updateProduct = (req, res) => {

}

const deleteProduct = (req, res) => {

}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct }