const userModel = require("../models/userModel.js");
const otpGenerator = require("otp-generator");
const otpVerification = require("../helper/otpValidate.js");
const request = require("request");
const jwt = require("jsonwebtoken");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const dotenv = require("dotenv");
const { registerMail } = require("./mailer.js")
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
    const { name, mobile, email } = req.body;

    // Validate required fields
    // console.log(name,mobile,email)
    if (!name) {
      return res.status(400).json({
        success: false,
        msg: "Name are required",
      });
    }

    if (!mobile && !email) {
      return res.status(400).json({
        success: false,
        msg: "Please provide either Mobile or Email.",
      });
    }

    if (mobile && !/^\d{10}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        msg: "Please correct Phone number",
      });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const expirationTime = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes

    // Prepare query for user lookup
    const query = {};
    if (email) query.email = email;
    if (mobile) query.mobile = mobile;

    // Update or create the user with OTP
    const updateData = {
      name,
      otp,
      otpExpiration: expirationTime,
    };
    if (email) updateData.email = email;
    if (mobile) updateData.mobile = mobile;

    await userModel.findOneAndUpdate(
      query,
      updateData,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (email) {
      await registerMail({ name, email, otp });
      res.status(200).json({
        success: true,
        msg: "OTP sent successfully. Please check your email.",
      });
    } else {
      // Send OTP via Message Central
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
      request(options, (error, response) => {
        if (error) {
          console.error("Error sending OTP via SMS:", error);
          res.status(500).json({
            success: false,
            msg: "Failed to send OTP via SMS. Please try again later.",
          });
        }

        console.log("SMS response:", response.body);
        return res.status(200).json({
          success: true,
          msg: "OTP sent successfully to your mobile.",
        });
      });
    }


  } catch (error) {
    console.error("Send OTP Error:", error.message);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

exports.sendOtpMail = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        msg: "Name and Email are required",
      });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const expirationTime = new Date(Date.now() + 2 * 60 * 1000); // OTP valid for 2 minutes

    // Send email
    await registerMail({ name, email, otp });

    // Update or create the user with OTP
    await userModel.findOneAndUpdate(
      { email },
      {
        name,
        email,
        mobile,
        otp,
        otpExpiration: expirationTime,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // Respond with success message
    res.status(200).json({
      success: true,
      msg: "OTP sent successfully. Please check your email.",
    });
  } catch (error) {
    console.error("Send OTP Error:", error.message);
    res.status(500).json({
      success: false,
      msg: `Error: ${error.message}`,
    });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, mobile, otp } = req.body;
    // console.log("verify "+email , mobile , otp)
    if ((!email && !mobile) || !otp) {
      return res.status(400).json({
        success: false,
        msg: "Mobile number or Email and OTP are required.",
      });
    }

    let query = {};
    if (email) query.email = email;
    if (mobile) query.mobile = mobile;
    query.otp = otp;

    const user = await userModel.findOne(query);

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "Invalid OTP or mobile number.",
      });
    }

    const isOtpExpired = await otpVerification(user.otpExpiration);

    if (isOtpExpired) {
      return res.status(400).json({ success: false, msg: "OTP has expired." });
    }


    // Generate token and update user status
    const tokenPayload = email ? { id: user._id, email: user.email } : { id: user._id, mobile: user.mobile };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: "30d" });

    // Mark user as verified and save token
    user.isVerified = true;
    user.lastlogin = new Date();
    user.activeTokens.push(token);
    await user.save();

    return res.status(200).json({
      success: true,
      msg: "OTP verified successfully.",
      token,
    });

  } catch (error) {
    console.error("Verify OTP Error:", error.message);
    res.status(500).json({
      success: false,
      msg: "verifyOTP last " + error.message,
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
    const { amount, itemId, mobile, name, email , agreeForPay } = req.body;
    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: `receipt_${itemId}`,
      notes: {
        mobile: mobile,
        name: name,
        email: email,
        itemId,
        agreeForPay: agreeForPay
      },
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
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const secret = process.env.KEY_SECRET;

    // Step 1: Verify Signature
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed: Invalid signature",
      });
    }

    // Step 2: Fetch Payment Details from Razorpay
    const paymentDetails = await razorpayInstance.payments.fetch(razorpay_payment_id);

    console.log("Payment Details:", paymentDetails);
    console.log("Notes Details:", paymentDetails.notes);

    const { mobile, name, email , agreeForPay } = paymentDetails.notes;

    // Step 3: Validate Mobile Number
    if (!mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number missing in payment notes",
      });
    }

    console.log("Mobile:", mobile);

    // Step 4: Build Update Fields (Conditionally Include Email)
    const updateFields = {
      $set: {
        name: name || "No Name Provided", // Use default if name is missing
        agreeForPay: agreeForPay,
        mobile,
      },
      $push: {
        planid: paymentDetails.id,
        fullPaymentDetails: paymentDetails,
      },
    };

    // Conditionally include email if it exists
    if (email) {
      updateFields.$set.email = email;
    }

    // Step 5: Perform Upsert Operation (Insert or Update User)
    const updatedUser = await userModel.findOneAndUpdate(
      { mobile }, // Find user by mobile number
      updateFields,
      {
        new: true,               // Return the updated document
        upsert: true,            // Create new document if user doesn't exist
        setDefaultsOnInsert: true, // Apply default values from the schema on insert
      }
    );

    console.log("Updated User:", updatedUser);

    // Step 6: Final Response
    return res.status(200).json({
      success: true,
      message: "Payment verified and user updated successfully.",
      paymentDetails,
      updatedUser,
    });
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed. Please try again.",
    });
  }
};

exports.createInvoice = async (req, res) => {
  try {
    const { paymentId } = req.body;

    // Fetch payment details
    const paymentDetails = await razorpayInstance.payments.fetch(paymentId);

    // Create Invoice (explicitly specify line items, customer details, etc.)
    const invoiceOptions = {
      type: 'invoice',
      description: 'Invoice for your payment',
      customer: {
        email: paymentDetails.email,
        contact: paymentDetails.contact,
        name: 'Customer Name',
      },
      line_items: [
        {
          name: 'Product/Service Name',
          amount: paymentDetails.amount,
          currency: 'INR',
          quantity: 1,
        },
      ],
      receipt: paymentDetails.order_id,
      sms_notify: 1,
      email_notify: 1,
      notes: {
        paymentId: paymentId,
      },
    };

    const invoice = await razorpayInstance.invoices.create(invoiceOptions);

    res.status(200).json({
      success: true,
      message: 'Invoice created successfully',
      invoice,
    });
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ success: false, message: 'Failed to create invoice' });
  }
};

exports.fetchInvoiceDetails = async (req, res) => {
  try {
    const { invoiceId } = req.body;

    const invoiceDetails = await razorpayInstance.invoices.fetch(invoiceId);

    res.status(200).json({
      success: true,
      invoiceDetails,
    });
  } catch (error) {
    console.error('Error fetching invoice details:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch invoice details',
    });
  }
};
