const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

router.get("/courses", homeController.showHome);
router.get("/:id", homeController.showCourse);

module.exports = router;
