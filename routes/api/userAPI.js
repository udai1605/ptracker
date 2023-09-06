const { Router } = require("express");
const router = new Router();
const {
  signUp,
  signIn,
  initiateResetPassword,
  verifyOtpAndResetPassword,
} = require("../../controller/userController");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/initiate-reset-password", initiateResetPassword);
router.post("/verify-otp-reset-password", verifyOtpAndResetPassword);

module.exports = router;
