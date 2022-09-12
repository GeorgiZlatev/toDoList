//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  // res.send("Hello");
  let toDay = new Date();
  let currentDay = toDay.getDay();
  let day = "";

  // if (currentDay === 6 || currentDay === 0){
  //   // res.write("Yes it`s the Weekend.");
  //   day = "Weekend";
  //   // res.sendfile(__dirname + '/weekend.html');
  // }else{
  //   // res.write("I have to work.");
  //   // res.send();
  //   day = "Weekday";
  //   // res.sendfile(__dirname + '/weekday.html');
  // }

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:

  }

  res.render("list", {
    kindOfDay: day
  }); //ejs

});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
