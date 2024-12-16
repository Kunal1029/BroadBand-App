// myaccount -> user detail or form with edit button .(Name , email , address (city , pincode))
//user history of purchased plans and all details about payment and also can download payment receipt.
//Current plans details if have any and if not then encourage , also can add option of recharge for a friend also in Menu

const userModel = require("../models/userModel.js");

exports.moreDetails = async (req, res) => {
    try {
        const { name, mobile, email, address, dob } = req.body;

        if (!name || !mobile || !/^\d{10}$/.test(mobile)) {
            return res.status(400).json({
                success: false,
                msg: "Name and mobile number are required",
            });
        }

        await userModel.findOneAndUpdate(
            { mobile },
            {
                name,
                mobile,
                email,
                address,
                dob
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message,
        });
    }
}

// exports.getSingleUser = async (req,res) =>{
//     try {
        
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             msg: error.message,
//         });
//     }
// }

