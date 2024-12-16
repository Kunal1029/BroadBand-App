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

    // if(mobile){
    //   const token = jwt.sign(
    //     { id: user._id, mobile: user.mobile },
    //     process.env.JWT_SECRET,
    //     { expiresIn: "30d" }
    //   );

    //   user.isVerified = true;
    //   user.lastlogin = new Date();
    //   user.activeTokens.push(token);
    //   await user.save();

    //   res.status(200).json({
    //     success: true,
    //     msg: "OTP verified successfully.",
    //     token,
    //   });
    // }else {
    //   const token = jwt.sign(
    //     { id: user._id, email: user.email },
    //     process.env.JWT_SECRET,
    //     { expiresIn: "30d" }
    //   );

    //   user.isVerified = true;
    //   user.lastlogin = new Date();
    //   user.activeTokens.push(token);
    //   await user.save();

    //   res.status(200).json({
    //     success: true,
    //     msg: "OTP verified successfully.",
    //     token,
    //   });
    // }

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
    const { amount, itemId, mobile, name, email } = req.body;
    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: `receipt_${itemId}`,
      notes: {
        mobile: mobile,
        name: name,
        email: email,
        itemId,
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

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed: Invalid signature",
      });
    }

    // Fetch payment details from Razorpay
    const paymentDetails = await razorpayInstance.payments.fetch(razorpay_payment_id);

    console.log("Payment Details hh ", paymentDetails);
    console.log("notes Details kh ", paymentDetails.notes);

    const { mobile } = paymentDetails.notes;

    if (!mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number missing in payment notes",
      });
    }

    console.log(mobile)

    const updatedUser = await userModel.findOneAndUpdate(
      { mobile },
      {
        $set: { name: paymentDetails.notes.name, mobile },
        $push: { planid: paymentDetails.id },
        $push: { fullPaymentDetails: paymentDetails // Add multiple objects to the array
        }
      },
      { new: true, upsert: true, setDefaultsOnInsert: true  } // upsert: true ensures user is created if they do not exist
    );

    console.log("Updated User:", updatedUser);
    console.log("Type payment " + paymentDetails)

    // Check if user is null after the operation (should not be null with upsert)
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: `User with mobile ${mobile} could not be created.`,
      });
    }
    // const invoiceDetails = await razorpayInstance.invoices.fetch(paymentDetails.invoice_id);
    // console.log("INVOICE DETAILS "+invoiceDetails)

    return res.status(200).json({
      success: true,
      message: "Payment verified",
      paymentDetails,
    });


  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
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
