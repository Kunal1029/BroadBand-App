import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

export const razorpayInstance = new Razorpay({
    key_id: process.env.KEYID,
    key_secret: process.env.KEY_SECRET,
});