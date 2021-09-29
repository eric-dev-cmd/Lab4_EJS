const Subject = require("../../models/Subject");
const {
  mongooseToObject,
  multipleMongoseToObject,
} = require("../../utils/mongoose");
class SiteController {
  async showHome(req, res, next) {
    res.send("User Home page");
  }
}

module.exports = new SiteController();
