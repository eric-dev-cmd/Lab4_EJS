const Subject = require("../../models/Subject");
const {
  mongooseToObject,
  multipleMongoseToObject,
} = require("../../utils/mongoose");
class homeController {
  async showHome(req, res, next) {
    await Subject.find((err, subjects) => {
      if (err) handleError(err);
      res.render("./user/HomePage", {
        title: "Home Page ",
        subjects,
      });
    });
  }
}

module.exports = new homeController();
