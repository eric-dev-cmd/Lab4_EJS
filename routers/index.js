const homeAdminRouter = require("./admin/home");
const homeUserRouter = require("./user/home");

function route(app) {
  app.use("/admin", homeAdminRouter);
  app.use("/", homeUserRouter);
}
module.exports = route;
