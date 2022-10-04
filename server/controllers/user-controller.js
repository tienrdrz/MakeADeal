const { User } = require('../models');

const userController = {
    //GET all users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //GET a single user
    getUserById({params}, res) {
        User.findOne({_id: params.id })
        .select('-__v')
        .sort({ _id: -1})
        .then(dbUserData => {
            //if no user found
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
};