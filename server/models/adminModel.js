const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    adminName: {
      type: String,
    },
    adminEmail: {
      type: String,
      required:true,
      default: "1zeta2024@gmail.com",
    },
    adminMobile: {
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
