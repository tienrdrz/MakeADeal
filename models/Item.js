const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const BuySchema = new Schema({
    
})

const ItemSchema = new Schema({
    itemName: {
        type: String
    },
    createdBy: {
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