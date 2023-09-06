const { Router } = require("express");
const router = new Router();
const {
  addPartTime,
  updatePartTime,
  getallPartTime,
} = require("../../controller/partimeController");

router.post("/add", addPartTime);
router.put("/update/:_id", updatePartTime);
router.get("/all/:_id", getallPartTime);

module.exports = router;
