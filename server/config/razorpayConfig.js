const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config();

module.exports.razorpayInstance = new Razorpay({
    key_id: process.env.KEYID,
    key_secret: process.env.KEY_SECRET,
});
