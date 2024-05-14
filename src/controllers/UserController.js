const userService = require('../services/userService')
const { handleHttpError } = require('../helpers/handleHttpError')
const { matchedData } = require('express-validator')
const { encrypt } = require('../helpers/bcryptHelper')

const getUsers = async (req, res) => {
    try{
        const users = await userService.getUsers()
        res.send({users}) 
    }catch(e){
        handleHttpError(res, 'Error GET users')
    }
}

const getUser = (req, res) => {

}

const createUser = async (req, res) => {

    try{
        req = matchedData(req)
        const password = await encrypt(req.password)

        const body = {...req, password}
        const user = await userService.createUser(body)
        user.set('password', undefined, {strict: false})
        res.send({user})
        //res.send(body)
    }catch(e){
        console.log(e)
        handleHttpError(res,'Error create user')
    }
}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }