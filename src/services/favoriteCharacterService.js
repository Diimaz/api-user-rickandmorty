const { favoriteCharacterModel } = require('../models')

const getFavsCharacters = () => {
    const allFavs = favoriteCharacterModel.find({})
    return allFavs
}

const getFavCharacter = (id) => {
    const fav = favoriteCharacterModel.findOne({_id: id})
    return fav
}

const getFavsUser = (idUser) => {
    const favUser = favoriteCharacterModel.findOne({idUser: idUser}).select('favs')
    return favUser
}

const getAllFavsUser = (idUser) => {
    const favsUser = favoriteCharacterModel.findOne({idUser: idUser}).select('favs')
    return favsUser
}

const updateFavsUser = (idUser, idFav) => {
    const favsUpdate = favoriteCharacterModel.findOneAndUpdate({idUser: idUser}, { $push: { favs: idFav } }, {new: true})
    return favsUpdate
}

const deleteFavsUser = (idUser, idFav) => {
    const favsDelete = favoriteCharacterModel.findOneAndUpdate({idUser: idUser}, { $pull: { favs: idFav } }, {new: true})
    return favsDelete
}

const createFav = (data) => {
    const fav = favoriteCharacterModel.create(data)
    return fav
}


module.exports = { 
    getFavsCharacters, 
    getFavCharacter,
    getFavsUser,
    getAllFavsUser,
    updateFavsUser, 
    deleteFavsUser,
    createFav
}