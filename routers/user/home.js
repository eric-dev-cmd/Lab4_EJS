const express = require("express");
const router = express.Router();

const homeUserController = require("../../controller/user/homeController");

router.get("/courses", homeUserController.showHome);
router.get("/course/:id", homeUserController.showCourse);

module.exports = router;
