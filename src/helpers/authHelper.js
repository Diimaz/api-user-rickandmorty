const { verifyToken } = require('./generateToken')
const { handleHttpError } = require('../helpers/handleHttpError')

const checkAuth = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if(tokenData !== undefined){
            req.body.idUser = tokenData._id
            //console.log(req.idUser)
            next()
        }else{
            handleHttpError(res, 'Debes iniciar sesión primero')
        }
    }catch (e) {
        handleHttpError(res, 'Error no token', 404)  
    }
}

const checkRoleAuth = (roles) => async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        //const userData = await getUser(tokenData._id)

        if([].concat(roles).includes(tokenData.rol)){
            next()
        }else{
            handleHttpError(res, 'No tienes permiso para esta ruta')
        }

    }catch (e) {
        handleHttpError(res, 'Error token', 404)
    }
}


module.exports = {
    checkAuth,
    checkRoleAuth
}