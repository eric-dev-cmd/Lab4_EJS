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
}

module.exports = new homeController();
