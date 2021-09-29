const Subject = require("../../models/Subject");
const {
  mongooseToObject,
  multipleMongoseToObject,
} = require("../../utils/mongoose");
class homeController {
  async showHome(req, res, next) {
    const subject = await Subject.find({});
    // console.log(subject);
    res.render("./admin/index", {
      subjects: subject,
      title: "List Course",
    });
  }
  async showCourse(req, res, next) {
    let course;
    console.log(req.params.slug);
    course = await Subject.findOne({ slug: req.params.slug }).then(
      (subject) => {
        res.render("./admin/course", {
          title: "View Course",
          subject,
        });
      }
    );
  }
  async createCourse(req, res, next) {
    res.render("./admin/createCourse", {
      title: "Create Course",
    });
  }
  async storeCourse(req, res, next) {
    let course = req.body;
    let data = new Subject(course);
    data.save((err, subject) => {
      if (err) return handleError(err);
      console.log(subject);
      res.redirect("/admin/courses");
    });
  }
  async deleteCourse(req, res, next) {}
}

module.exports = new homeController();
