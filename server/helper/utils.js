const adminModel = require("../models/adminModel.js");
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');

/**
 * Common admin verification function
 * @param {Object} params - Contains adminEmail and/or adminMobile for verification.
 * @returns {Promise<Object>} - Returns the admin document if found.
 * @throws Will throw an error if neither adminEmail nor adminMobile is provided or if no matching admin is found.
 */
exports.verifyAdmin = async ({ adminEmail, adminMobile }) => {
    if (!adminEmail && !adminMobile) {
        throw new Error("Please provide either adminEmail or adminMobile for verification.");
    }

    const admin = adminEmail ? await adminModel.findOne({ adminEmail }) : await adminModel.findOne({ adminMobile });

    if (!admin) {
        throw new Error("No admin found with the provided email or mobile number.");
    }

    return admin;
};

exports.verifyAdminPassword = async (req, res) => {
    try {
        const { adminEmail, adminMobile, password } = req.body;

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required.",
            });
        }

        // Use the reusable function to verify admin
        const admin = await verifyAdmin({ adminEmail, adminMobile });

        // Check password logic (example uses bcrypt, replace as needed)
        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Admin login successful.",
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

exports.fetchAdminDetailsofOneZetaApp = async (req, res) => {
    try {
        const admin = await adminModel.find();

        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "Invalid admin",
            });
        }
        const { adminEmail } = admin[0];
        const { password } = admin[0];
        const { adminMobile } = admin[0];

        return res.status(200).json({
            success: true,
            message: "Admin found",
            adminEmail,
            adminMobile,
            password
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Unable to fetch : " + error.message,
        });
    }
}

exports.verifyAdminRole = (requiredRole) => {
    return (req, res, next) => {
        if (!req.admin || req.admin.role !== requiredRole) {
            return res.status(403).json({
                success: false,
                message: "Access denied: Insufficient permissions",
            });
        }
        next();
    };
}

exports.generateOtp = () => {
    return otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
};

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

exports.validateOtp = (admin, otp) => {
    if (admin.otp !== otp) return false;
    if (admin.expirationTime < new Date()) {
        admin.flag = false;
        return false; // OTP expired
    }
    return true;
};

