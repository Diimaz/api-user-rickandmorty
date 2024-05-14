const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const FavoriteCharacterSchema = new mongoose.Schema(
    {
        idUser: {
            type: mongoose.Types.ObjectId,
            ref:'users',
            unique: true
        },
        favs: {
            type: [Number],
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

FavoriteCharacterSchema.plugin(mongooseDelete, { overrideMethods:'all' })
module.exports = mongoose.model('favorite_character', FavoriteCharacterSchema)