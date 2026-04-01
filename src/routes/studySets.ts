const express = require("express");
const router = express.Router();
const studySetsController = require("../app/controllers/StudySetsController");

router.use("/get", studySetsController.getStudySet);
router.use("/update", studySetsController.updateStudySet);
module.exports = router;