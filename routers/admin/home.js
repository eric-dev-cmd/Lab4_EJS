const express = require("express");
const router = express.Router();
const homeAdminController = require("../../controller/admin/homeController");

router.get("/courses", homeAdminController.showHome);
router.get("/course/:slug", homeAdminController.showCourse);

module.exports = router;
