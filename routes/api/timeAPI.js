const { Router } = require("express");
const router = new Router();
const {
  addTimeStamp,
  editTimeStamp,
  getallTimeStampById,
} = require("../../controller/timeController");

router.post("/add", addTimeStamp);
router.put("/update/:_id", editTimeStamp);
router.get("/all/:user_id", getallTimeStampById);

module.exports = router;
