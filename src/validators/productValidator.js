const { check } = require('express-validator')
const  validateResults  = require('../helpers/handleValidator')

const validatorCreateProduct = [
    check('nombre')
    .exists()
    .withMessage('El campo nombre no existe')
    .notEmpty()
    .withMessage('El campo nombre no debe estar vacio'),
    check('precio')
    .exists()
    .withMessage('El campo precio no existe')
    .notEmpty()
    .withMessage('El campo precio no debe estar vacio'),
    check('diferentesPrecio')
    .exists()
    .withMessage('El campo diferentes precio no existe')
    .notEmpty()
    .withMessage('El campo diferentes precio no debe estar vacio')
    .isArray()
    .withMessage('El campo diferentes precio debe ser un array'),
    (req, res, next) => validateResults(req,res,next) 
]

module.exports = {validatorCreateProduct}
