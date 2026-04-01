const express = require("express");
const router = express.Router();
const vocabularyController = require("../app/controllers/vocabularyController");

router.get("/get", vocabularyController.getVocabulary);
router.post("/create", vocabularyController.createVocabulary);
router.post("/update", vocabularyController.updateVocabulary);
router.post("/delete", vocabularyController.deleteVocabulary);
module.exports = router;