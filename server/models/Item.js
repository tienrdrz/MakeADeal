const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// const BuySchema = new Schema({
    
// })

const ItemSchema = new Schema({
    User_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    itemName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    postedAt: {
        type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    itemDesc: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    itemPrice: {
        type: Number,
        required: true
    }

});

const Item = model('Item', ItemSchema);

module.exports = Item;