const { verifyToken } = require('./generateToken')
const { handleHttpError } = require('../helpers/handleHttpError')

const checkAuth = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if(tokenData !== undefined){
            req.body.idUser = tokenData._id
            next()
        }else{
            handleHttpError(res, 'Debes iniciar sesión primero', 401)
        }
    }catch (e) {
        handleHttpError(res, 'Error no token', 401)  
    }
}

const checkRoleAuth = (roles) => async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)

        if([].concat(roles).includes(tokenData.rol)){
            next()
        }else{
            handleHttpError(res, 'No tienes permiso para esta ruta', 403)
        }

    }catch (e) {
        handleHttpError(res, 'Error token', 401)
    }
}


module.exports = {
    checkAuth,
    checkRoleAuth
}