const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
    },
    mbps: {
      type: String,
    },
    Data: {
      type: String,
      default: "Unlimited data",
    },
    Validity: {
      type: String,
      default: "Monthly",
    },
    ott: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const planModel = mongoose.model("plan", planSchema);

module.exports = planModel;
