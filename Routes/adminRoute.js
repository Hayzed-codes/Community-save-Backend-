const express = require("express");
const router = express.Router();

const {adminRegister, adminLogin, logoutAdmin} = require("../Controllers/AdminController")

router.post("/register", adminRegister)
router.post("/login", adminLogin)
router.post("/logout", logoutAdmin)


module.exports = router;
