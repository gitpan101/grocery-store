const mongoose = require("mongoose");

let FoodTypeSchema = new mongoose.Schema({
  typeName: {
    type: String,
    required: true,
    minlength: 3
  }
});

let FoodType = mongoose.model("food_types", FoodTypeSchema);

module.exports = { FoodType };
