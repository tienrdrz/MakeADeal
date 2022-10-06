const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/TradeWay",
  (err) => {
    if (err) throw err;
    console.log("connected to MongoDB");
  }
);

mongoose.set('debug', true);

module.exports = mongoose.connection;
