import userModel from "../models/userModel.js";
import otpGenerator from "otp-generator";
// import twilio from "twilio";
import { otpVerificationn } from "../helper/otpValidate.js";
// import { createRazorpayInstance } from "../helper/razorpayConfig.js";
// import crypto from "crypto";
import request from "request";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const twilioClient = new twilio(accountSid, authToken);

export const userLogin = async (req, res) => {
  res.status(200).send({ message: "OTP send Successfully" });
};
// var request = require('request');
// var options = {
// 'method': 'POST',
// 'url': 'https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=C-3654CEF2FDCA4D7&senderId=UTOMOB&type=SMS&flowType=SMS&mobileNumber=6261549410&message=Welcome to Message Central. We are delighted to have you here! - Powered by U2opia',
// 'headers': {
// 'authToken': 
// }
// };
// request(options, function (error, response) {
// if (error) throw new Error(error);
// console.log(response.body);
// });

export async function verifyUser(req, res, next) {
  try {
    // Extract mobile number from the request, considering both body and query parameters
    const { mobile } = req.method === "POST" ? req.body : req.query;

    if (!mobile) {
      return res.status(400).json({ error: "Mobile number is required" });
    }

    // Find the user by mobile number
    const user = await userModel.findOne({ mobile });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // User exists, pass control to the next middleware
    next();
  } catch (error) {
    console.error("Error during user verification:", error);
    return res.status(500).json({ error: "Server error during authentication" });
  }
}


// export const sendOtp = async (req, res) => {
//   try {
//     const { name, mobile } = req.body;

//     // Validate required fields
//     if (!name || !mobile || !/^\d{10}$/.test(mobile)) {
//       return res.status(400).json({
//         success: false,
//         msg: "Name and mobile number are required",
//       });
//     }

//     // Generate OTP
//     const otp = otpGenerator.generate(6, {
//       lowerCaseAlphabets: false,
//       upperCaseAlphabets: false,
//       specialChars: false,
//     });

//     // const currentDate = new Date();
//     const expirationTime = new Date(Date.now() + 200 * 60000);

//     await userModel.findOneAndUpdate(
//       { mobile }, // Find by mobile
//       {
//         name,
//         mobile,
//         otp,
//         // otpExpiration: new Date(currentDate.getTime() + 2 * 60000), // OTP valid for 5 minutes
//         // otpExpiration: new Date(currentDate.getTime()) },
//         otpExpiration: expirationTime,
//       },
//       { upsert: true, new: true, setDefaultsOnInsert: true }
//     );

//     await twilioClient.messages.create({
//       body: `Hi ${name}, your OTP is: ${otp}. It is valid for 2 minutes.`,
//       to: `+91${mobile}`, // Recipient's phone number
//       from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
//     });

//     // Success response
//     return res.status(200).json({
//       success: true,
//       msg:
//         "OTP sent successfully" +
//         process.env.TWILIO_PHONE_NUMBER +
//         " otp " +
//         otp, // Replace with a generic success message
//     });


//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       msg: error.message,
//     });
//   }
// };

export const sendOtp = async (req, res) => {
  try {
    const { name, mobile } = req.body;

    // Validate required fields
    if (!name || !mobile || !/^\d{10}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        msg: "Name and mobile number are required",
      });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const expirationTime = new Date(Date.now() + 2 * 60 * 1000); // OTP valid for 2 minutes

    // Update or create the user with OTP
    await userModel.findOneAndUpdate(
      { mobile },
      {
        name,
        mobile,
        otp,
        otpExpiration: expirationTime,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // Prepare Message Central request
    let zeta_msg = "ZetaOne"
    let urls = `https://cpaas.messagecentral.com/send?countryCode=91&customerId=C-3654CEF2FDCA4D7&senderId=UTOMOB&type=SMS&flowType=SMS&mobileNumber=6261549410&message=zetaOne`
    const options = {
      method: "POST",
      'url': `${process.env.MESSAGE_CENTRAL_BASE_URL}&mobileNumber=${mobile}&message=${zeta_msg}`,
      headers: {
        authToken: process.env.MESSAGE_CENTRAL_AUTH_TOKEN,
      },
    };

    // Send OTP via Message Central
    request(options, (error, response) => {
      if (error) {
        console.error("Error sending OTP:", error);
        return res.status(500).json({
          success: false,
          msg: "Failed to send OTP. Please try again later.",
        });
      }

      console.log("Message Central response:", response.body);
      console.log(`${process.env.MESSAGE_CENTRAL_BASE_URL}`)
      res.status(200).json({
        success: true,
        msg: "OTP sent successfully.",
      });
    });
  } catch (error) {
    console.error("Send OTP Error:", error.message);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

// export const verifyOtp = async (req, res) => {
//   try {
//     const { mobile, otp } = req.body;

//     if (!mobile || !otp) {
//       return res.status(400).json({
//         success: false,
//         msg: "Mobile number and OTP are required.",
//       });
//     }

//     const user = await userModel.findOne({
//       mobile,
//       otp,
//     });

//     if (!user) {
//       return res.status(400).json({
//         success: true,
//         msg: `Invalid OTP or mobile number. : ${otp}`,
//       });
//     }

//     const isOtpExpired = await otpVerificationn(user.otpExpiration);
//     //  const isOtpExpired =  await otpExpiration;

//     if (isOtpExpired) {
//       return res.status(400).json({ success: false, msg: "OTP has expired." });
//     }

//     const token = jwt.sign(
//       { id: user._id, mobile: user.mobile },
//       process.env.JWT_SECRET,
//       { expiresIn: "2d" }
//     );

//     user.isVerified = true;
//     user.lastlogin = new Date();
//     user.activeTokens.push(token);
//     await user.save();

//     return res.status(200).json({
//       success: true,
//       msg: "OTP verified successfully.",
//       token,
//     });

//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       msg: error.message,
//     });
//   }
// };



// export const logout = async (req, res) => {
//   try {
//     const { token } = req.body;

//     if (!token) {
//       return res.status(400).json({ success: false, msg: "Token is required." });
//     }

//     let decoded;
//     try {
//       decoded = jwt.verify(token, process.env.JWT_SECRET);
//     } catch (err) {
//       return res.status(401).json({ success: false, msg: "Invalid or expired token." });
//     }

//     const user = await userModel.findById(decoded.id);

//     if (!user) {
//       return res.status(404).json({ success: false, msg: "User not found." });
//     }

//     // Remove the token from activeTokens
//     const tokenIndex = user.activeTokens.indexOf(token);
//     if (tokenIndex === -1) {
//       return res.status(400).json({ success: false, msg: "Token not found in active tokens." });
//     }

//     user.activeTokens.splice(tokenIndex, 1);
//     await user.save();

//     return res.status(200).json({ success: true, msg: "Logged out successfully." });
//   } catch (error) {
//     console.error("Logout Error:", error);
//     return res.status(500).json({ success: false, msg: "Internal server error." });
//   }
// };


export const verifyOtp = async (req, res) => {
  try {
    const { mobile, otp } = req.body;

    if (!mobile || !otp) {
      return res.status(400).json({
        success: false,
        msg: "Mobile number and OTP are required.",
      });
    }

    const user = await userModel.findOne({ mobile, otp });

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "Invalid OTP or mobile number.",
      });
    }

    const isOtpExpired = await otpVerificationn(user.otpExpiration);

    if (isOtpExpired) {
      return res.status(400).json({ success: false, msg: "OTP has expired." });
    }

    const token = jwt.sign(
      { id: user._id, mobile: user.mobile },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    user.isVerified = true;
    user.lastlogin = new Date();
    user.activeTokens.push(token);
    await user.save();

    res.status(200).json({
      success: true,
      msg: "OTP verified successfully.",
      token,
    });
  } catch (error) {
    console.error("Verify OTP Error:", error.message);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};


export const logout = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ success: false, msg: "Token is required." });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ success: false, msg: "Invalid or expired token." });
    }

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found." });
    }

    // Remove the token from activeTokens
    const tokenIndex = user.activeTokens.indexOf(token);
    if (tokenIndex === -1) {
      return res.status(400).json({ success: false, msg: "Token not found in active tokens." });
    }

    user.activeTokens.splice(tokenIndex, 1);
    await user.save();

    return res.status(200).json({ success: true, msg: "Logged out successfully." });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({ success: false, msg: "Internal server error." });
  }
};

// payment

// paymentController.js
const razorpayInstance = new Razorpay({
  key_id: "rzp_test_Vqe0v9vpFUEqOz",
  key_secret: "PP73859wD8BK5NLdPreP1Y57",
});

// Create Razorpay Order
export const createOrder = async (req, res) => {
  // console.log("Hit the createOrder route", req.body);
  try {
    const {amount, itemId } = req.body;
    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: `receipt_${itemId}`,
    };

    const order = await razorpayInstance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
      key: process.env.KEYID,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ success: false, message: "Payment order creation failed" });
  }
};

// Verify Razorpay Payment
export const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  // console.log(req.body, "Verify Payment");
  const secret = process.env.KEY_SECRET;

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest("hex");

  if (generatedSignature === razorpay_signature) {
    return res.status(200).json({
      success: true,
      message: "Payment Verified",
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Payment not verified",
    });
  }
};

