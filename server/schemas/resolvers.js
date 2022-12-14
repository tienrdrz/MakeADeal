const { AuthenticationError } = require("apollo-server-express");
const { User, Item } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("items");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // query a user
    user: async (parent, { email }, context) => {
      if (context.user) {
        const user = await User.findOne({ email })
          .select("-__v -password")
          .populate("items");

        return user;
      }

      throw new AuthenticationError("Can't find this user");
    },
    // query all product
    items: async (parent, args, context) => {
      const items = await Item.find();

      return items;
    },
    // query one product
    item: async (parent, { _id }) => {
      const item = await Item.findById(_id);
      console.log(_id);

      return item;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { password, email }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addItem: async (parent, args, context) => {
      if (context.user) {
        console.log(args);
        const createdItem = await Item.create(args);

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { items: { ...args } } },
          { new: true, runValidators: true }
        );
        console.log(updatedUser, createdItem);
        return { updatedUser, createdItem };
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
