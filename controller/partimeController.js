const parttimeModel = require("../models/parttimeModel");
const mongoose = require("mongoose");
module.exports = {
  addPartTime: async (req, res, next) => {
    try {
      const { userId, companyName, payRate, startDate } = req.body;
      const parttime = new parttimeModel({
        user_id: userId,
        part_time_name: companyName,
        pay_rate_history: [{ pay_per_hour: payRate, effective_date: startDate }],
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
      const { companyName, payRate, startDate } = req.body;

      const prevData = await parttimeModel.findById(_id);
      prevData.part_time_name = companyName || prevData.part_time_name;
      // prevData.pay_per_hour = payRate || prevData.pay_per_hour;
      if (payRate) {
        const newPayRate = {
          pay_per_hour: payRate,
          effective_date: startDate || new Date()
        };
        prevData.pay_rate_history.push(newPayRate);
      }
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
    try {
      const partTimes = await parttimeModel.aggregate([
        { $match: { user_id: mongoose.Types.ObjectId(_id) } }, // Filter by user_id
        { $unwind: '$pay_rate_history' }, // Unwind the pay_rate_history array

        // Sort documents by part_time_name and effective_date in descending order
        { $sort: { part_time_name: 1, 'pay_rate_history.effective_date': -1 } },

        // Group by part_time_name and get the latest pay_per_hour
        {
          $group: {
            _id: '$_id',
            part_time_name: { $first: '$part_time_name' },
            user_id: { $first: '$user_id' },
            pay_per_hour: { $first: '$pay_rate_history.pay_per_hour' },
            start_date: { $first: '$start_date' },
            credit_hours: { $first: '$credit_hours' },
            maxHoursPerCheque: { $first: '$maxHoursPerCheque' },
          },
        },
      ]);

      if (partTimes.length > 0) {
        res.status(200).json({ data: partTimes });

      } else {
        res.status(200).json({ message: "No part-time found" });
      }

    } catch (err) {
      next(err);
    }
    // parttimeModel.find({ user_id: _id }, (err, entries) => {
    //   if (err) {
    //     res.status(500).json({ message: err });
    //   } else if (entries.length > 0) {
    //     res.status(200).json({ data: entries });
    //   } else {
    //     res.status(200).json({ message: "No part-time found" });
    //   }
    // });
  },
};
