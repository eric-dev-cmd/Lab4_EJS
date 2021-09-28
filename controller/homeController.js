const data = require("../dev-data/data");
const Subject = require("../models/Subject");
class homeController {
  async showHome(req, res, next) {
    const subject = await Subject.find({});
    console.log(subject);
    res.render("index", {
      subjects: subject,
      title: "Home EJS TTV",
    });
  }
  async showCourse(req, res, next) {
    const courseId = await Subject.findById(req.params.id);
    console.log(courseId);
    res.render();
  }
}

module.exports = new homeController();
