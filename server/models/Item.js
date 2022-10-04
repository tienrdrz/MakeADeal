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
        type: String
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
        type: String
    },
    itemPrice: {
        type: Number
    }

});

const Item = model('Item', ItemSchema);

module.exports = Item;