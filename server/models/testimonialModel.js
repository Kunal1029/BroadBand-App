const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const testimonialModel = mongoose.model("testimonial", testimonialSchema);

module.exports = testimonialModel;
