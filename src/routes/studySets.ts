const express = require("express");
const router = express.Router();
const studySetsController = require("../app/controllers/StudySetsController");

router.use("/", studySetsController.index);
module.exports = router;