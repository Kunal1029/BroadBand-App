const userModel = require("../models/userModel.js");
const adminModel = require("../models/adminModel.js");
const { verifyAdmin, validateOtp, hashPassword , verifyAdminRole } = require("../helper/utils.js")
const otpGenerator = require("otp-generator");
const { registerMail } = require("./mailer.js")
const jwt = require('jsonwebtoken');


exports.getAllUser = async (req, res) => {
    try {
        const users = await userModel.find();

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            data: users,
        });

    } catch (error) {
        console.error("Error fetching users:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch users - " + error.message,
        });
    }
}

exports.adminlogin = async (req, res) => {
    try {
        const { adminEmail, password, adminMobile } = req.body;

        // Check if email or mobile is provided
        if (!adminEmail && !adminMobile) {
            return res.status(400).json({
                success: false,
                message: "Please enter either email or mobile number or both",
            });
        }

        // Check if password is provided
        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        // Initialize an empty filter
        let filter = {};

        // Set filter based on input (email or mobile)
        if (adminEmail) filter.email = adminEmail;
        if (adminMobile) filter.mobile = adminMobile;

        if (adminMobile) filter.mobile = adminMobile;

        const admin = adminEmail ? await adminModel.findOne({ adminEmail }) : await adminModel.findOne({ adminMobile });

        // If admin does not exist
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or mobile number",
            });
        }

         // Verify password
         const isPasswordMatch = await bcrypt.compare(password, admin.password);
         if (!isPasswordMatch) {
             return res.status(401).json({
                 success: false,
                 message: "Incorrect password",
             });
         }
        

        const token = jwt.sign(
            {
                id: admin._id, // Encoded admin ID
                name: admin.adminName,
                email: admin.adminEmail,
                mobile: admin.adminMobile,
            },
            process.env.ZETAJWT, // Use a secret key from your environment variables
            { expiresIn: "1h" } // Token expires in 1 hour
        );

        // Successful login
        return res.status(200).json({
            success: true,
            message: "Admin logged in successfully",
            token, // Send token to the client
            admin: {
                id: admin._id,
                name: admin.adminName,
                email: admin.adminEmail,
                mobile: admin.adminMobile,
            },
        });
    } catch (error) {
        console.error("Admin login error:", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to login admin - " + error.message,
        });
    }
};

exports.adminForgetandChangePassword = async (req, res) => {
    //enter admin email or mobile
    try {
        const { adminEmail, adminMobile } = req.body;

        const admin = await verifyAdmin({ adminEmail, adminMobile });

        const otp = otpGenerator.generate(6, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false,
        });

        const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
        admin.otp = otp;
        admin.expirationTime = expirationTime; // Save the OTP or token
        await admin.save();

        const name = "Admin"
        if (adminEmail) {
            // console.log("Admin ", adminEmail)
            await registerMail({ name, adminEmail, otp });
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
        // console.error("forget password admin error: ", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to process forget password request - " + error.message,
        });
    }
}

exports.checkForgetPasswordOtp = async (req, res) => {
    try {
        const { otp, adminEmail, adminMobile } = req.body;
        const admin = await verifyAdmin({ adminEmail, adminMobile });

        if (!admin || !validateOtp(admin, otp)) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP.",
            });
        }
        admin.isOtpVerified = true;
        await admin.save();

        return res.status(200).json({
            success: true,
            msg: "OTP verified successfully.",
        });

    } catch (error) {
        console.error("Check forget password admin error: ", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to Check  forget password admin - " + error.message,
        });
    }
}

exports.newAdminPassword = async (req, res) => { // need to protext this route
    try {
        const { password, confirmPassword, adminEmail, adminMobile } = req.body;

        if (!password || !confirmPassword || password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match or are missing.",
            });
        }

        const admin = await verifyAdmin({ adminEmail, adminMobile });
        if (!admin || !admin.isOtpVerified) {
            return res.status(403).json({
                success: false,
                message: "OTP verification is required before setting a new password.",
            });
        }

        const name = "Admin"
        admin.password = await hashPassword(password);
        admin.otp = null; // Clear OTP
        admin.expirationTime = null; // Clear expiration time
        admin.isOtpVerified = false; // Reset verification flag
        await admin.save();
        await registerMail({ name, adminEmail });

        res.status(200).json({
            success: true,
            msg: "Password updated successfully.",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to set new password - " + error.message,
        });
    }
}

exports.ModifyAdminAccoumt = async (req, res) => {

}

exports.lastLoginAndAllActivityAdminLog = async (req, res) => {

}

exports.verifyAuthAllAdminRotes = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Get token from Authorization header (Bearer Token)
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Token missing",
            });
        }

        const decoded = jwt.verify(token, process.env.ZETAJWT); // Decode and verify the token

        // Find the admin by ID from the decoded token
        const admin = await adminModel.findById(decoded.id);
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Unauthorized: Invalid admin",
            });
        }

        // Attach admin info to request object
        req.admin = admin;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Admin auth verification error: ", error.message);
        res.status(403).json({
            success: false,
            message: "Invalid or expired authorization token.",
        });
    }
}

exports.adminLogout = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token not provided.",
            });
        }

        // Option 1: If tokens are stored in a database (token blacklist)
        // Save the token to a blacklist database or collection to prevent further use
        // await tokenBlacklistModel.create({ token });

        // Option 2: If not storing tokens, just clear cookies
        res.clearCookie('authToken', { httpOnly: true, secure: true });

        res.status(200).json({
            success: true,
            message: "Admin logged out successfully.",
        });
    } catch (error) {
        console.error("Logout error: ", error.message);
        res.status(500).json({
            success: false,
            message: "Error logging out admin.",
        });
    }
}