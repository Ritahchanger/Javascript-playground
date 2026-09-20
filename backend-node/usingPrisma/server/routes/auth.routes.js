const express = require("express");

const { register, login, logout, me } = require("../controllers/authController");
const requireAuth = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", requireAuth, me);

module.exports = router;
