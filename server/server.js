require("./config/config");
require("./db/mongoose");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var { FoodType } = require("./models/food-type");
var { FoodItem } = require("./models/food-item");

const port = process.env.PORT;

var app = express();
var router = express.Router();

app.use(cors());
app.use(bodyParser.json());

router.route("/food_types").post((req, res) => {
  let foodType = new FoodType(req.body);

  foodType.save().then(
    result => {
      res.json(result);
    },
    err => res.status(400).send(err)
  );
});

router.route("/food_types").get((req, res) => {
  FoodType.find().then(
    foodTypes => {
      if (!foodTypes) {
        return res.status(404).send();
      }

      res.json(foodTypes);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/food_items").post((req, res) => {
  let foodItem = new FoodItem(req.body);

  foodItem.save().then(
    result => {
      res.json(result);
    },
    err => res.status(400).send(err)
  );
});

router.route("/food_items").get((req, res) => {
  FoodItem.find().then(
    foodItems => {
      if (!foodItems) {
        return res.status(404).send();
      }

      res.json(foodItems);
    },
    err => res.status(400).send(err)
  );
});

app.use("/api", router);

app.listen(port, () => console.log(`Server is up on port ${port}`));
