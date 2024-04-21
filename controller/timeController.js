const timeModel = require("../models/timeModel");
const generatePDF = require("../utils/generatePDF")
const path = require('path');
const mongoose = require("mongoose");
const fs = require('fs');
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
  shiftHoursScript: async (req, res) => {
    try {
      // Get all entries from timeModel
      const entries = await timeModel.find();
      // Array to store bulk update operations
      const bulkUpdateOperations = [];
      function convertToEasternTime(isoString, referenceDate) {
        const date = new Date(isoString);
        const referenceDateObj = new Date(referenceDate);
        const thresholdDateObj = new Date("2024-04-07T00:00:00.000+00:00");
        if (referenceDateObj < thresholdDateObj) {
          // Determine if the provided date is before or after the EDT start (second Sunday in March)
          const dstStart = new Date(referenceDateObj.getUTCFullYear(), 2, 8); // March 8th in reference year (UTC)
          const dstEnd = new Date(referenceDateObj.getUTCFullYear(), 10, 1); // November 1st in reference year (UTC)

          // Calculate the start of EDT (second Sunday in March)
          dstStart.setUTCDate(dstStart.getUTCDate() + (7 - dstStart.getUTCDay())); // Find the next Sunday after March 8th

          // Determine whether Eastern Time (ET) is observing Daylight Saving Time (EDT)
          const isDaylightSavingTime = date >= dstStart && date < dstEnd;

          // Define the Eastern Time (ET) offset in milliseconds based on standard time (UTC-5) or daylight saving time (UTC-4)
          const etOffset = isDaylightSavingTime ? -4 * 60 * 60 * 1000 : -5 * 60 * 60 * 1000;

          // Calculate Eastern Time by adding the offset to the UTC time
          const easternTime = new Date(date.getTime() + etOffset);

          // Format hours and minutes to HH:mm (add leading zero if necessary)
          const hours = easternTime.getUTCHours();
          const minutes = easternTime.getUTCMinutes();
          const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

          return formattedTime
        } else {
          return isoString
        }
      }
      // Process each entry to calculate and update shift_hours
      entries.forEach(entry => {
        const { date, start_time, end_time } = entry;

        // Calculate shift_hours using getTimeDifference function
        const start_time_new = convertToEasternTime(start_time, date);
        const end_time_new = convertToEasternTime(end_time, date);

        // Prepare update operation for the current entry
        bulkUpdateOperations.push({
          updateOne: {
            filter: { _id: entry._id }, // Filter by document ID
            update: { $set: { start_time: start_time_new, end_time: end_time_new } }, // Set the new value of shift_hours
          },
        });
      });
      // console.log(bulkUpdateOperations)
      // Execute bulk update operations
      await timeModel.bulkWrite(bulkUpdateOperations);

      res.json({ message: 'Shift hours updated successfully' });
    } catch (error) {
      console.error('Error updating shift hours:', error);
      res.status(500).json({ message: 'Internal server error' });
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
          return res
            .status(500)
            .json({ message: "Unable to delete timestamp" });
        }

        // Successfully deleted
        return res
          .status(200)
          .json({ message: "Timestamp successfully deleted" });
      });
    } catch (e) {
      next(e);
    }
  },

  // fetchTimeStamps: async (
  //   user_id,
  //   parttime_id,
  //   startDate,
  //   endDate,
  //   page = 1,
  //   limit = 10
  // ) => {
  //   const countQuery = { user_id };
  //   const findQuery = { user_id };

  //   if (parttime_id) {
  //     countQuery.parttime_id = parttime_id;
  //     findQuery.parttime_id = parttime_id;
  //   }

  //   if (startDate && endDate) {
  //     const start = new Date(startDate);
  //     const end = new Date(endDate);
  //     countQuery.date = { $gte: start, $lte: end };
  //     findQuery.date = { $gte: start, $lte: end };
  //   }

  //   const count = await timeModel.countDocuments(countQuery);
  //   const entries = await timeModel
  //     .find(findQuery)
  //     .populate({
  //       path: "parttime_id",
  //       select: "part_time_name pay_rate_history",
  //     })
  //     .sort({ date: -1 })
  //     .skip((page - 1) * limit)
  //     .limit(limit)
  //     .exec();

  //   let totalHours = 0;
  //   let totalPay = 0;
  //   let companyName = "";

  //   entries.forEach((entry, index) => {
  //     const hours = parseFloat(entry?.shift_hours);
  //     let partime = entry.parttime_id
  //     const pay = hours * entry?.parttime_id?.pay_per;
  //     console.log(partime,partime.hasOwnProperty("pay_per"),partime.pay_per)
  //     totalHours += hours;
  //     totalPay += pay;
  //     if (index === 0) {
  //       companyName = entry?.parttime_id?.part_time_name
  //       pay_per_hour = entry?.parttime_id?.pay_per
  //     }
  //   });

  //   return {
  //     shifts: entries,
  //     totalPay: totalPay,
  //     totalHours: totalHours,
  //     currentPage: page,
  //     companyName: companyName,
  //     pay_per_hour: 2,
  //     totalPages: Math.ceil(count / limit),
  //     count: count,
  //     startDate: startDate ? startDate : null,
  //     endDate: endDate ? endDate : null,
  //   };
  // },
  fetchTimeStamps: async (
    user_id,
    parttime_id,
    startDate,
    endDate,
    page = 1,
    limit = 10
  ) => {
    try {
      // Pipeline stages for the aggregation
      const pipeline = [];

      // Match stage to filter by user_id and optional parttime_id, startDate, endDate
      const matchStage = {
        $match: {
          user_id: mongoose.Types.ObjectId(user_id),
        },
      };

      if (parttime_id) {
        matchStage.$match.parttime_id = mongoose.Types.ObjectId(parttime_id);
      }
      function getUTCDate(dateStr) {
        // Split the date string (assumes format DD-MM-YYYY)
        const [month, day, year] = dateStr.split('-').map(Number);

        // Create a Date object with the given values, interpreted as local time 
        const localDate = new Date(year, month - 1, day);

        // Create a UTC Date object with 00:00:00 time on that day
        const utcDate = new Date(Date.UTC(localDate.getUTCFullYear(),
          localDate.getUTCMonth(),
          localDate.getUTCDate()));

        return utcDate;
      }
      if (startDate && endDate) {
        matchStage.$match.date = {
          $gte: getUTCDate(startDate),
          $lte: getUTCDate(endDate),
        };
      }

      pipeline.push(matchStage);

      pipeline.push({
        $lookup: {
          from: 'parttimes',
          localField: 'parttime_id',
          foreignField: '_id',
          as: 'parttimeDetails',
        },
      });
      pipeline.push({ $unwind: '$parttimeDetails' });
      pipeline.push({
        $project: {
          _id: 1,
          user_id: 1,
          date: 1,
          location: 1,
          start_time: 1,
          shift_hours: 1,
          end_time: 1,
          part_time_name: '$parttimeDetails.part_time_name',
          pay_rate_history: '$parttimeDetails.pay_rate_history',
          pay_per_hour: {
            $let: {
              vars: {
                sortedHistory: {
                  $filter: {
                    input: '$parttimeDetails.pay_rate_history',
                    as: 'history',
                    cond: {
                      $lte: ['$$history.effective_date', '$date'],
                    },
                  },
                },
              },
              in: {
                $arrayElemAt: [
                  '$$sortedHistory.pay_per_hour',
                  -1,
                ],
              },
            },
          },
          // pay_per_hour: {
          //   $let: {
          //     vars: {
          //       sortedHistory: {
          //         $map: {
          //           input: '$parttimeDetails.pay_rate_history',
          //           as: 'history',
          //           in: {
          //             $cond: [
          //               { $lte: ['$$history.effective_date', '$date'] },
          //               '$$history.pay_per_hour',
          //               null,
          //             ],
          //           },
          //         },
          //       },
          //     },
          //     in: {
          //       $arrayElemAt: [
          //         { $filter: { input: '$$sortedHistory', cond: { $ne: ['$$this', null] } } },
          //         0,
          //       ],
          //     },
          //   },
          // },
          // total_pay: { $multiply: ['$shift_hours', { $toDouble: '$pay_per_hour' }] },
        },
      });
      pipeline.push({
        $set: {
          total_shift_pay: {
            $multiply: [
              { $toDouble: '$shift_hours' }, // Convert shift_hours to double for multiplication
              '$pay_per_hour', // Use pay_per_hour as calculated above
            ],
          },
        },
      });
      pipeline.push({ $sort: { date: -1 } });
      // Skip and Limit stages for pagination
      pipeline.push({ $skip: (page - 1) * limit });
      pipeline.push({ $limit: limit });

      // Execute the aggregation pipeline
      const result = await timeModel.aggregate(pipeline);

      // Count total documents (for pagination)
      const totalCount = await timeModel.countDocuments(matchStage.$match);

      return {
        shifts: result,
        totalPay: result.reduce((total, entry) => total + parseFloat(entry.total_shift_pay), 0),
        totalHours: result.reduce((total, entry) => total + parseFloat(entry.shift_hours), 0),
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        count: totalCount,
        startDate: startDate || null,
        endDate: endDate || null,
      };
    } catch (error) {
      console.error('Error fetching time stamps:', error);
      throw error;
    }
  },
  //get the list of times from timeModel and get the details of parttime by using the parttime_id in timeModel which is referencing parttimeModel in mongoose,nodejs
  getallTimeStampById: async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10; // Default limit is 10
      const { parttime_id, startDate, endDate } = req.query;
      const data = await module.exports.fetchTimeStamps(
        user_id,
        parttime_id,
        startDate,
        endDate,
        page,
        limit
      );
      if (data.shifts.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "No shifts found" });
      }
    } catch (e) {
      next(e);
    }
  },
  downloadPdfById: async (req, res, next) => {
    try {
      const { user_id } = req.params;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10; // Default limit is 10
      const { parttime_id, startDate, endDate, companyFilter } = req.query;
      console.log(req.query)
      const data = await module.exports.fetchTimeStamps(
        user_id,
        parttime_id,
        startDate,
        endDate,
        page,
        limit
      );
      data.companyFilter = companyFilter === "true" ? true : false
      // console.log(data)
      // Define the desired output file path
      const outputPath = path.join(__dirname, `shiftReport${new Date().toISOString().replace(/:/g, '-')}.pdf`);;

      // Generate PDF
      await generatePDF(data, outputPath);

      // Send the PDF file in response
      res.sendFile(outputPath, (err) => {
        if (err) {
          console.log(err)
          res.status(500).send("Error sending PDF");
        } else {
          // Optionally delete the file after sending to avoid clutter
          fs.unlink(outputPath, (unlinkErr) => {
            if (unlinkErr) console.log("Error deleting PDF file:", unlinkErr);
          });
        }
      });
    } catch (error) {
      console.log(error)
      res.status(500).send("Error generating PDF");
    }
  },
};
