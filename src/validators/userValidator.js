const { check } = require('express-validator')
const  validateResults  = require('../helpers/handleValidator')

const validatorCreateUser = [
    check('email')
    .isEmail().withMessage('El campo email no es un correo electronico')
    .exists().withMessage('El campo email no existe')
    .notEmpty().withMessage('El campo email no debe estar vacio'),
    check('password')
    .exists().withMessage('El campo password no existe')
    .notEmpty().withMessage('El campo password no debe estar vacio'),
    (req, res, next) => validateResults(req,res,next) 
]

module.exports = { validatorCreateUser }
