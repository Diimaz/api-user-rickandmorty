const express = require('express')
const router = express.Router()
//const {validatorCreateProduct} = require('../../validators/productValidator')
const { validatorCreateUser } = require('../../validators/userValidator')
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../../controllers/UserController')
const { checkAuth, checkRoleAuth } = require('../../helpers/authHelper')

router
    //.get('/', checkAuth, checkRoleAuth(['admin']), getUsers)
    .get('/', getUsers)
    .get('/:id', checkAuth, checkRoleAuth(['admin']), getUser)
    .post('/', checkAuth, checkRoleAuth(['admin']), validatorCreateUser ,createUser)
    .put('/:id', checkAuth, checkRoleAuth(['admin']), updateUser)
    .delete('/:id',checkAuth, checkRoleAuth(['admin']) ,deleteUser)

module.exports = router