const express = require("express");
const bp = require("body-parser");
const request = require("request");
const date = require(__dirname + "/date.js");

const app = express();
const items = ["Buy Food", "Cook Food"];
const workItems = [];

app.use(bp.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDate();
  res.render("index", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("index", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
