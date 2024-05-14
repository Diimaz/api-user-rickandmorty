const { check } = require('express-validator')
const  validateResults  = require('../helpers/handleValidator')

const validatorInsertFav = [
    check('idUser')
    .isMongoId().withMessage('no es un id')
    .exists().withMessage('no existe')
    .notEmpty().withMessage('no debe estar vacio'),
    check('idFav')
    //.isArray().withMessage('no es un array')
    .exists().withMessage('no existe'),
    //.notEmpty().withMessage('no debe estar vacio'),
    (req, res, next) => validateResults(req,res,next) 
]

const validatorGetFavs = [
    check('idUser')
    .isMongoId().withMessage('no es un id')
    .exists().withMessage('no existe')
    .notEmpty().withMessage('no debe estar vacio'),
    (req, res, next) => validateResults(req,res,next) 
]

module.exports = { validatorInsertFav, validatorGetFavs }
