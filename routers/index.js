const homeRouter = require("./home");
function route(app) {
  app.use("/", homeRouter);
  app.use("/course", homeRouter);

}
module.exports = route;
