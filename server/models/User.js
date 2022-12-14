const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import items schema from xxxx.js
const Item = require("./Item");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      min: 4,
    },
    items: [Item.schema],
  },
  {
    // set this to use virtual below
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `itemCount` with the number of items we have
userSchema.virtual("itemCount").get(function () {
  return this.items.length;
});

const User = model("User", userSchema);

module.exports = User;
