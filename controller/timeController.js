const timeModel = require("../models/timeModel");

module.exports = {
  addTimeStamp: async (req, res, next) => {
    try {
      const {
        user_id,
        shiftDate,
        totalHours,
        startTime,
        endTime,
        companyID,
        location,
      } = req.body;

      const newTimeModel = new timeModel({
        user_id: user_id,
        date: shiftDate,
        start_time: startTime,
        end_time: endTime,
        parttime_id: companyID,
        location: location,
        shift_hours: totalHours,
      });
      newTimeModel
        .save()
        .then((savedTime) => {
          res.json({ msg: "TimeStamp Created", data: savedTime });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({ message: "Unable to save entry to database" });
        });
      //create a API to create a entry in timeModel with user_id, date, start_time, end_time, parttime_id using mongoose,expressjs
    } catch (e) {
      next(e);
    }
  },
  editTimeStamp: async (req, res, next) => {
    try {
      const { _id } = req.params;
      const { shiftDate, totalHours, startTime, endTime, companyID, location } =
        req.body;

      const prevData = await timeModel.findById(_id);
      prevData.date = shiftDate || prevData.date;
      prevData.location = location || prevData.location;
      prevData.shift_hours = totalHours || prevData.shift_hours;
      prevData.start_time = startTime || prevData.start_time;
      prevData.end_time = endTime || prevData.end_time;
      prevData.parttime_id = companyID || prevData.parttime_id;

      prevData.save((err, updatedTimeStamp) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(updatedTimeStamp);
      });
    } catch (e) {
      next(e);
    }
  },
  // ... (rest of your code)

  deleteTimeStamp: async (req, res, next) => {
    try {
      const { _id } = req.params; // Extracting the _id from the request parameters

      // Using the deleteOne() function from mongoose to delete a specific document by _id
      timeModel.deleteOne({ _id: _id }, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: "Unable to delete timestamp" });
        }

        // Successfully deleted
        return res.status(200).json({ message: "Timestamp successfully deleted" });
      });

    } catch (e) {
      next(e);
    }
  },
  
// ... (rest of your code)

  //get the list of times from timeModel and get the details of parttime by using the parttime_id in timeModel which is referencing parttimeModel in mongoose,nodejs
  getallTimeStampById: async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10; // Default limit is 10

      const { parttime_id, startDate, endDate } = req.query;

      const countQuery = { user_id: user_id };
      const findQuery = { user_id: user_id };

      if (parttime_id) {
        countQuery.parttime_id = parttime_id;
        findQuery.parttime_id = parttime_id;
      }

      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        countQuery.date = { $gte: start, $lte: end };
        findQuery.date = { $gte: start, $lte: end };
      }

      const count = await timeModel.countDocuments(countQuery);

      const entries = await timeModel
        .find(findQuery)
        .populate({
          path: "parttime_id",
          select: "pay_per_hour part_time_name",
        })
        .sort({ date: -1 }) // Sort by shift_date in descending order
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      if (entries.length > 0) {
        let totalHours = 0;
        let totalPay = 0;
        entries.forEach((entry) => {
          let hours = parseFloat(entry?.shift_hours);
          let pay = hours * parseFloat(entry?.parttime_id?.pay_per_hour);
          totalHours += hours;
          totalPay += pay;
        });

        res.status(200).json({
          shifts: entries,
          totalPay: totalPay,
          totalHours: totalHours,
          currentPage: page,
          totalPages: Math.ceil(count / limit),
          count: count,
          startDate: startDate ? startDate : null,
          endDate: endDate ? endDate : null,
        });
      } else {
        res.status(200).json({ message: "No shifts found" });
      }
    } catch (e) {
      next(e);
    }
  },
};
