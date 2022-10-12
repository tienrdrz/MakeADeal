const { Item, User } = require('../models');

const itemController = {
 //GET all items
 getAllItems(req, res) {
    Item.find({})
        .select('-__v')
        .sort({ _id: -1})
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
},
//GET a single item
getItemById({ params }, res) {
    Item.findById({ _id: params.id })
    .select('-__v')
    .sort({ _id: -1})
    .then(dbItemData => {
        //if no id
        if (!dbItemData) {
            res.status(404).json({ message: 'There is no item found with this id' });
            return;
        }
        res.json(dbItemData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
//POST a new item
createItem({ body }, res) {
    Item.create(body)
    .then(dbItemData => {
        return User.findOneAndUpdate(
            { _id: body.userId },
            { $push: { items: dbItemData}},
            { new: true }
        )
        .then(dbItemData => res.json(dbItemData))
        .catch(err => res.status(400).json(err));
    })
},
  //PUT to update an item by id
  updateItem({ params, body }, res) {
    Item.findOneAndUpdate({ _id: params.id }, body, {new: true})
    .then(dbItemData => {
        //if no item found
        if (!dbItemData) {
            res.status(404).json({ message: 'There is no item with this id'});
            return;
        }
        res.json(dbItemData);
    })
    .catch(err => res.status(400).json(err)); 
},
  //DELETE an item by id
  deleteItem({ params }, res) {
    Item.findOneAndDelete({ _id: params.id })
    .then(dbItemData => {
        if (!dbItemData) {
            res.status(404).json({ message: 'There is no item with this id' });
            return;
        }
        res.json(dbItemData);
    })
    .catch(err => res.status(400).json(err));
},
};

module.exports = itemController;