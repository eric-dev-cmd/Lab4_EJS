const Subject = require("../models/Subject");
const {
  mongooseToObject,
  multipleMongoseToObject,
} = require("../utils/mongoose");
class homeController {
  async showHome(req, res, next) {
    const subject = await Subject.find({});
    console.log(subject);
    res.render("index", {
      subjects: subject,
      title: "List Course",
    });
  }
  async showCourse(req, res, next) {
    let course;
    course = await Subject.findById(req.params.id, (err, subject) => {
      if (err) return;
      try {
        res.render("./course/course", {
          title: "View Course",
          subject,
        });
      } catch (error) {}
    });
  }
}

module.exports = new homeController();
