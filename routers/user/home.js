const express = require("express");
const router = express.Router();

const homeUserController = require("../../controller/user/homeController");

router.get("/", homeUserController.showHome);

module.exports = router;
