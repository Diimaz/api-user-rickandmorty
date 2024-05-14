const { userModel } = require('../models')

const getUsers = () => {
    const allUsers = userModel.find({})
    return allUsers
}

const getUser = (id) => {
    const user = userModel.findOne({_id: id})
    return user
}

const createUser = (data) => {
    const user = userModel.create(data)
    return user
}


module.exports = { 
    getUsers, 
    getUser, 
    createUser
}