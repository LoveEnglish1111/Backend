const express = require("express");
const router = express.Router();
const studySetsController = require("../app/controllers/StudySetsController");

router.post("/create", studySetsController.createStudySet);
router.get("/get", studySetsController.getStudySet);
router.post("/update", studySetsController.updateStudySet);
router.post("/delete", studySetsController.deleteStudySet);
module.exports = router;