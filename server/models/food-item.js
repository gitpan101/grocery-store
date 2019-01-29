const mongoose = require("mongoose");

let FoodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  description: {
    type: String,
    maxlength: 1000
  },
  price: {
    type: Number,
    required: true
  },
  foodType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "food_types"
  }
});

let FoodItem = mongoose.model("food_items", FoodItemSchema);

module.exports = { FoodItem };
