const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
    shift_hours: {
      type: Number,
      required: true,
    },
    parttime_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "parttime",
    },
  },
  {
    timestamps: true,
    // toJSON: {
    //   transform: (doc, ret) => {
    //     ret.shift_hours = parseFloat(ret.shift_hours);
    //     return ret;
    //   },
    // },
  }
);

module.exports = mongoose.model("time", timeSchema);
