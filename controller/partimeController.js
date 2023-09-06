const parttimeModel = require("../models/parttimeModel");

module.exports = {
  addPartTime: async (req, res, next) => {
    try {
      const { userId, companyName, payRate, startDate } = req.body;
      const parttime = new parttimeModel({
        user_id: userId,
        part_time_name: companyName,
        pay_per_hour: payRate,
        start_date: startDate,
      });
      parttime
        .save()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              "Some error occurred while creating the Part Time.",
          });
        });
    } catch (e) {
      next(e);
    }
  },
  updatePartTime: async (req, res, next) => {
    try {
      const { _id } = req.params;
      console.log(req.body)
      const { companyName, payRate, startDate  } = req.body;

      const prevData = await parttimeModel.findById(_id);
      console.log(prevData)
      prevData.part_time_name = companyName || prevData.part_time_name;
      prevData.pay_per_hour = payRate || prevData.pay_per_hour;
      prevData.start_date = startDate || prevData.start_date;

      prevData.save((err, updatedPartTime) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(updatedPartTime);
      });
    } catch (e) {
      next(e);
    }
  },
  getallPartTime: async (req, res, next) => {
    const { _id } = req.params;
    parttimeModel.find({ user_id: _id }, (err, entries) => {
      if (err) {
        res.status(500).json({ message: err });
      } else if (entries.length > 0) {
        res.status(200).json({ data: entries });
      } else {
        res.status(200).json({ message: "No part-time found" });
      }
    });
  },
};
