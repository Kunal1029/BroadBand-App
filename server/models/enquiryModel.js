const mongoose = require("mongoose");

const enquerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [2, "Name must be at least 2 characters."],
      maxlength: [50, "Name cannot exceed 50 characters."],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required."],
      validate: {
        validator: (v) => /^\d{10}$/.test(v),
        message: (props) => `${props.value} is not a valid 10-digit mobile number!`,
      },
    },
    email: {
      type: String,
      validate: {
        validator: (v) => /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v),
        message: (props) => `${props.value} is not a valid email address!`,
      },
      trim: true,
    },
    comment: {
      type: String,
      trim: true,
    },
    enquerySendTime: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const enqueryModel = mongoose.model("enquery", enquerySchema);

module.exports = enqueryModel;
