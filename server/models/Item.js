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
    postedBy: {
        type: String
    },
    postedAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    itemDescription: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }

});

const Item = model('Item', ItemSchema);

module.exports = Item;