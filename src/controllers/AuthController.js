const { registerUser, loginUser, searchUserEmail } = require('../services/authService')
const { handleHttpError } = require('../helpers/handleHttpError')
const { matchedData } = require('express-validator')
const { encrypt, compare } = require('../helpers/bcryptHelper')
const { tokenSign } = require('../helpers/generateToken')

const register = async (req, res) => {
    try{
        req = matchedData(req)
        const email = req.email.toLowerCase()
        req = {...req, email}
        const searchUser = await searchUserEmail(req.email)
        if(searchUser){
            handleHttpError(res, 'Email already exists')
            return
        }

        const password = await encrypt(req.password)
        //const email = req.email.toLowerCase()

        const body = { ...req, password, email }
        const user = await registerUser(body)
        user.set('password', undefined, {strict: false})
        res.send({user})
    }catch(e){
        console.log(e)
        handleHttpError(res,'Error create user')
        return
    }
}

const login = async (req, res) => {
    try{
        req = matchedData(req)
        const user = await loginUser(req.email.toLowerCase())
        if(!user){
            handleHttpError(res, 'User not exists', 401)
            return
        }

        const passwordHash = user.password
        const check = await compare(req.password, passwordHash)

        if(!check){
            handleHttpError(res, 'Password invalid', 401)
            return
        }

        user.set('password', undefined, {strict: false})
        data = {
            token: await tokenSign(user),
            user
        }
        res.send(data)

    }catch(e){
        console.log(e)
        handleHttpError(res,'Error login user')
    }
}

module.exports = { register, login }