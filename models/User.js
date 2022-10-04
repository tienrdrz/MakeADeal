const { Schema, model } = require('mongoose');
//const validator = require('validator')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email : {
            type: String,
            required: 'Email is required',
            unique: true,
            
        }
    }
)


const User = model('User', UserSchema);

module.exports = User;