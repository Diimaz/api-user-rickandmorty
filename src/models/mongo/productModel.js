const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const ProductSchema = new mongoose.Schema(
    {
        nombre: {
            type: 'String',
        },
        precio: {
            type: 'Decimal128'
        },
        diferentesPrecio: {
            type: 'Array'
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

ProductSchema.plugin(mongooseDelete, { overrideMethods:'all' })
module.exports = mongoose.model('Products', ProductSchema)