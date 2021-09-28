const data = require("../dev-data/data");
class homeController {
  showHome(req, res, next) {
    console.log(data);
    res.render("index", {
      subjects: data,
    });
  }
}

module.exports = new homeController();
