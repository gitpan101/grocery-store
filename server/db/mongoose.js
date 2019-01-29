const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGOLAB_URI,
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () =>
  console.log("Mongodb connection established")
);
