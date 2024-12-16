const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      unique: true,
    },
    otp: {
      type: String,
      required: true,
    },
    otpExpiration: {
      type: Date,
      default: Date.now,
      get: (otpExpiration) => otpExpiration.getTime(),
      set: (otpExpiration) => new Date(otpExpiration),
    },
    lastlogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    profilePic: { type: String },
    email: { type: String, unique: true },
    address: { type: String },
    planid: {
      type: [String], // Store plan IDs or descriptions
      default: [],
    },
    fullPaymentDetails: [
      {
        type: Map, // Allows for key-value pairs inside each object
        of: mongoose.Schema.Types.Mixed, // Allows any type of value inside the object
        default: {} // Set default empty object if none provided
      }
    ],
    dob: {
      type: Date,
    },
    paymentConfirmByUser:{
      type: Boolean
    },
    planStarting: {
      type: Date,
    },
    planEnding: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.planStarting; // Ensure planEnding is after planStarting
        },
        message: "Plan ending date must be after the start date!",
      },
    },

    verificationToken: String,
    verificationTokenExpiresAt: Date,
    activeTokens: {
      type: [String],
      default: [],
      validate: {
        validator: function (v) {
          return v.length <= 10; // Example: Limit to 10 tokens
        },
        message: "Too many active tokens.",
      },
    }, // Store valid tokens for this user
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
