import razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

export const createRazorpayInstance = () =>{
    return new razorpay({
        key_id: process.env.KEYID,
        key_secret: process.env.KEY_SECRET
    })
}
