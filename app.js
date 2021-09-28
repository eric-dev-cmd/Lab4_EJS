const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const route = require("./routers/index");
const bodyParser = require("body-parser");

const expressLayouts = require("express-ejs-layouts");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.set("layout", "./layouts/layout");
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
route(app);

module.exports = app;
