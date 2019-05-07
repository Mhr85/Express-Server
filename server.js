//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  //console.log(req);
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Conatct me at: FirstName@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("Hi, I'm Mihir!");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
