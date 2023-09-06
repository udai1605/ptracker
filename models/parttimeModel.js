const mongoose = require("mongoose");
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
    pay_per_hour: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    start_date: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.pay_per_hour = parseFloat(ret.pay_per_hour);
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("parttime", parttimeSchema);
