const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/authController.ts");

router.post("/register", authController.createAccount);
router.get("/login", authController.login);
module.exports = router;