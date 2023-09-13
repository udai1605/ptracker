const express = require("express");
const router = express.Router();
const verifyToken = require("../../utils/verifyToken");

router.get("/checkToken", verifyToken, (req, res) => {
  // If the middleware did not return an error, then the token is valid
  res.status(200).json({ message: "Token is valid", isLoggedIn: true });
});

module.exports = router;
