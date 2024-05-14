const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: 'String',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true,
            select: false
        },
        rol: {
            type: 'string',
            default: 'user',
            //type: ['user', 'admin'],
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

UserSchema.plugin(mongooseDelete, { overrideMethods:'all' })
module.exports = mongoose.model('users', UserSchema)