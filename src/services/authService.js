const { userModel } = require('../models')

const registerUser = (data) => {
    const user = userModel.create(data)
    return user
}

const loginUser = (email) => {
    const user = userModel.findOne({email: email}).select('password email rol')
    return user
}

const searchUserEmail = (email) => {
    const user = userModel.findOne({email: email}).select('password email rol')
    return user
}

const getUser = (id) => {
    const user = userModel.findOne({_id: id})
    return user
}


module.exports = {registerUser, loginUser, searchUserEmail, getUser}