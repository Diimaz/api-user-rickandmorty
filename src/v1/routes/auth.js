const express = require('express')
const router = express.Router()
//const {validatorCreateProduct} = require('../../validators/productValidator')
const { validatorCreateUser } = require('../../validators/userValidator')
const { register, login } = require('../../controllers/AuthController')

router
    .post('/register',validatorCreateUser ,register)
    .post('/login', validatorCreateUser, login)
    .get('/login', (req, res) => {
        res.send({'dimas': 'dimassa'})
    })

module.exports = router