const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const route = require("./routers/index");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
route(app);

module.exports = app;
