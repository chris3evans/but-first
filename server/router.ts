const express = require("express");
const router = express.Router();
const profileControllers = require("./Models/profile.ts");

router.post("/profile", profileControllers.saveNewProfileData);

module.exports = router;
