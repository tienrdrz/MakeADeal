const { Schema, model } = require('mongoose');
//const validator = require('validator')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true
        },
        password : {
            type: String,
            required: 'Password is required'
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ]
    }
);


const User = model('User', UserSchema);

module.exports = User;