const express = require("express");
const router = express.Router();
const vocabularyController = require("../app/controllers/vocabularyController");

router.use("/", vocabularyController.index);
module.exports = router;