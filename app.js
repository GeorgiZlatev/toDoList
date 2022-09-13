//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cok Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  // res.send("Hello");
  let toDay = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = toDay.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItem: items
  }); //ejs
});

app.post("/", function(req, res) {
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");
  // console.log(item);
  res.render("list");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
