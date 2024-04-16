const { Router } = require("express");
const router = new Router();
const {
  addTimeStamp,
  editTimeStamp,
  getallTimeStampById,
  deleteTimeStamp,
  downloadPdfById, shiftHoursScript
} = require("../../controller/timeController");

router.post("/add", addTimeStamp);
router.put("/update/:_id", editTimeStamp);
router.delete("/delete/:_id", deleteTimeStamp);
router.get("/all/:user_id", getallTimeStampById);
router.post("/patch", shiftHoursScript)
router.get("/generate-pdf/:user_id", downloadPdfById);

module.exports = router;
