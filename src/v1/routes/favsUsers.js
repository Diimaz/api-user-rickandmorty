const express = require('express')
const router = express.Router()

const { favsUser, insertFavUser, deleteFavUser } = require('../../controllers/FavoriteCharacterController')
const { checkAuth, checkRoleAuth } = require('../../helpers/authHelper')
const { validatorInsertFav, validatorGetFavs } = require('../../validators/favUserValidator')

router
    .get('/', checkAuth, checkRoleAuth(['user']), validatorGetFavs, favsUser)
    .post('/', checkAuth, checkRoleAuth(['user']), validatorInsertFav, insertFavUser)
    .delete('/',checkAuth, checkRoleAuth(['user']), validatorInsertFav, deleteFavUser )

module.exports = router