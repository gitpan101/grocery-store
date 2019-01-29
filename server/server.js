require("./config/config");
require("./db/mongoose");

const express = require("express");
const bodyParser = require("body-parser");

var { FoodType } = require("./models/food-type");
var { FoodItem } = require("./models/food-item");

const port = process.env.PORT;

var app = express();
var router = express.Router();

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

app.use("/api", router);

app.listen(port, () => console.log(`Server is up on port ${port}`));
