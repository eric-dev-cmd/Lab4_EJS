const Subject = require("../../models/Subject");
const {
  mongooseToObject,
  multipleMongoseToObject,
} = require("../../utils/mongoose");
class homeController {
  async showHome(req, res, next) {
    res.send("User Home page");
  }
  async showCourse(req, res, next) {
    res.send("User course");
  }
}

module.exports = new homeController();
