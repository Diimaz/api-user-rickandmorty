const { getFavsUser, createFav, updateFavsUser, deleteFavsUser } = require('../services/favoriteCharacterService')
const { handleHttpError } = require('../helpers/handleHttpError')
const { matchedData } = require('express-validator')

const favsUser = async (req, res) => {
    try{
        req = matchedData(req)
        const { idUser } = req
        const data = await getFavsUser(idUser)
        if(data){
            res.send({data})
        }else{
            res.send({data:{
                favs:[]
            }})
        }
    }catch(e){
        console.log(e)
        handleHttpError(res,'Error GETS favs')
        return
    }
}

const insertFavUser = async (req, res) => {
    try{
        req = matchedData(req)
        const favUser = await getFavsUser(req.idUser)
        if(favUser){
            const updateFavs = await updateFavsUser(req.idUser, req.idFav)
            res.send({updateFavs})
        }else{
            const fav = await createFav(req)
            res.send({fav})
        }
    }catch(e){
        console.log(e)
        handleHttpError(res,'Error delete fav')
        return
    }
}

const deleteFavUser = async (req, res) => {
    try{
        req = matchedData(req)
        const favUser = await getFavsUser(req.idUser)
        if(favUser){
            const deleteFavs = await deleteFavsUser(req.idUser, req.idFav)
            res.send({deleteFavs})
        }else{
            res.send({favs:[]})
        }
    }catch(e){
        console.log(e)
        handleHttpError(res,'Error insert fav')
        return
    }
}

module.exports = { favsUser, insertFavUser, deleteFavUser }