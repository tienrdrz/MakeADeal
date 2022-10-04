const { Schema, model } = require('mongoose');
//const validator = require('validator')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            minlength: 3
        },
        password : {
            type: String,
            required: 'Password is required',
            minlength: 5
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