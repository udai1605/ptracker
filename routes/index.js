const { Router } = require("express");

const router = new Router();

router.use("/user", require("./api/userAPI"));
router.use("/part", require("./api/partTimeAPI"));
router.use("/time", require("./api/timeAPI"));
router.use("/token", require("./api/verifyAPI"));
router.use("/pay", require("./api/payAPI"));

module.exports = router;
