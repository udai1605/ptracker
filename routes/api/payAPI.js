const { Router } = require("express");
const router = new Router();
const {
    addPayout,
} = require("../../controller/payController");

router.post("/add", addPayout);

module.exports = router;
