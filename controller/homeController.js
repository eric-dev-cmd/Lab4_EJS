const data = require("../dev-data/data");
const Subject = require("../models/Subject");
class homeController {
  async showHome(req, res, next) {
    const subject = await Subject.find({});

    console.log(subject);
    res.render("index", {
      subjects: subject,
    });
  }
}

module.exports = new homeController();
