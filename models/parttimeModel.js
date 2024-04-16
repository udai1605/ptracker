const mongoose = require("mongoose");

const payRateHistorySchema = new mongoose.Schema(
  {
    pay_per_hour: {
      type: Number,  // Use the Number schema type for float values
      required: true,
    },
    effective_date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const parttimeSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    part_time_name: {
      type: String,
      required: true,
    },
    pay_rate_history: [payRateHistorySchema],
    start_date: {
      type: Date,
      required: false,
    },
    credit_hours: {
      type: Number,
      default: 0,
    },
    maxHoursPerCheque: {
      type: Number,
      default: 0,
    },
    paychequeCycle: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
    // toJSON: {
    //   transform: (doc, ret) => {
    //     ret.pay_per_hour = parseFloat(ret.pay_per_hour);
    //     return ret;
    //   },
    // },
  }
);

module.exports = mongoose.model("parttime", parttimeSchema);
