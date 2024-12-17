const userModel = require("../models/userModel.js");
const adminModel = require("../models/adminModel.js");

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

        const ks = adminEmail ? adminEmail : adminMobile;

        const admin = adminEmail ? await adminModel.findOne({ adminEmail }) : await adminModel.findOne({ adminMobile });

        // If admin does not exist
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or mobile number",
            });
        }

        // Verify password
        if (admin.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }

        // Successful login
        return res.status(200).json({
            success: true,
            message: "Admin logged in successfully",
            data: {
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

exports.adminForgetandChangePassword = async (req,res)=>{

}

exports.ModifyAdminAccoumt = async (req,res)=>{
    
}

exports.lastLoginAndAllActivityAdminLog = async (req,res)=>{
    
}

exports.verifyAuthAllAdminRotes = async (req,res)=>{

}

exports.adminLogout = async (req,res)=>{

}