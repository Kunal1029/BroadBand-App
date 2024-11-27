const userModel = require("../models/userModel.js");
const otpGenerator = require("otp-generator");
const { otpVerificationn } = require("../helper/otpValidate.js");
const request = require("request");
const jwt = require("jsonwebtoken");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

exports.userLogin = async (req, res) => {
  res.status(200).send({ message: "OTP send Successfully" });
};

exports.verifyUser = async (req, res, next) => {
  try {
    const { mobile } = req.method === "POST" ? req.body : req.query;

    if (!mobile) {
      return res.status(400).json({ error: "Mobile number is required" });
    }

    const user = await userModel.findOne({ mobile });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    next();
  } catch (error) {
    console.error("Error during user verification:", error);
    return res.status(500).json({ error: "Server error during authentication" });
  }
};

exports.sendOtp = async (req, res) => {
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

    


// 'url': 'https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=C-3654CEF2FDCA4D7&senderId=UTOMOB&type=SMS&flowType=SMS&mobileNumber=6261549410&message=Welcome to Message Central. We are delighted to have you here! - Powered by U2opia',


    // Prepare Message Central request
    let zeta_msg = "Welcome to Message Central. We are delighted to have you here! - Powered by U2opia";
    // let urls = `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=C-3654CEF2FDCA4D7&senderId=UTOMOB&type=SMS&flowType=SMS&mobileNumber=6261549410&message=zetaOne`;
    const options = {
      method: "POST",
      'url': `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=C-3654CEF2FDCA4D7&senderId=UTOMOB&type=SMS&flowType=SMS&mobileNumber=6261549410&message=Welcome to Message Central. We are delighted to have you here! - Powered by U2opia`,
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
      console.log(`${process.env.MESSAGE_CENTRAL_BASE_URL}`);
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

exports.verifyOtp = async (req, res) => {
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

exports.logout = async (req, res) => {
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

// Razorpay Payment Integration

const razorpayInstance = new Razorpay({
  key_id: "rzp_test_Vqe0v9vpFUEqOz",
  key_secret: "PP73859wD8BK5NLdPreP1Y57",
});

// Create Razorpay Order
exports.createOrder = async (req, res) => {
  try {
    const { amount, itemId } = req.body;
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
exports.verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
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
