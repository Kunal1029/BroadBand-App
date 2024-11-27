const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
    },
    ownerEmail: {
      type: String,
      default: "1zeta2024@gmail.com",
    },
    ownerMobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastlogin: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
