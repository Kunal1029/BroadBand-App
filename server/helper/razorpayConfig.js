const razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config();

const createRazorpayInstance = () => {
    return new razorpay({
        key_id: process.env.KEYID,
        key_secret: process.env.KEY_SECRET
    });
};

module.exports = createRazorpayInstance;
