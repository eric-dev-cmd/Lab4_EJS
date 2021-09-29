const express = require("express");
const router = express.Router();
const homeAdminController = require("../../controller/admin/homeController");

router.post("/course/store", homeAdminController.storeCourse);
router.get("/course/create", homeAdminController.createCourse);
router.delete("/course/:id", homeAdminController.deleteCourse);
router.get("/courses", homeAdminController.showHome);
router.get("/course/:slug", homeAdminController.showCourse);

module.exports = router;
