const mongoose = require("mongoose");
const { type } = require("os");

const adminSchema = new mongoose.Schema(
  {
    adminName: {
      type: String,
    },
    adminEmail: {
      type: String,
      required: true,
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
    otp: {
      type: String
    },
    expirationTime: {
      type: Date,
      get: (otpExpiration) => otpExpiration.getTime(),
      set: (otpExpiration) => new Date(otpExpiration),
    },
    isOtpVerified: {
      type: Boolean,
      default: false
    },
    lastlogin: {
      type: Date,
      default: Date.now,
    },
    roles: {
      type: String,
      enum: ["super-admin", "admin"],
      default: "admin"
    }// Add role

  },
  { timestamps: true }
);

const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
