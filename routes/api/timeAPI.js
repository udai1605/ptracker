const { Router } = require("express");
const router = new Router();
const {
  addTimeStamp,
  editTimeStamp,
  getallTimeStampById,deleteTimeStamp
} = require("../../controller/timeController");

router.post("/add", addTimeStamp);
router.put("/update/:_id", editTimeStamp);
router.delete("/delete/:_id",deleteTimeStamp)
router.get("/all/:user_id", getallTimeStampById);

module.exports = router;
