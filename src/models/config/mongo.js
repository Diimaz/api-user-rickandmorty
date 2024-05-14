const mongoose = require('mongoose')
const MongoClients = require('mongodb').MongoClient
require('dotenv-safe').config()

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    //console.log(DB_URI)
    /*MongoClients.connect(DB_URI,(err, res) => {
        if(!err){
            console.log('Conexion correcta')
        }else{
            console.log('error de conexion')
        }
    })*/
    mongoose.connect(DB_URI).then( () => console.log('Conexion exitosa')).catch((error) => console.log(`error de conexion ${error}` ))
}

module.exports = dbConnect