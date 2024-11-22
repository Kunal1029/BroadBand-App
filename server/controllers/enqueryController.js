import enqueryModel from "../models/enquiryModel.js";
import faqModel from "../models/faqModel.js"

export const userEnquery = async (req, res) => {
    try {
        const { name, mobile, email, comment } = req.body;

        if (!name || !mobile) {
            return res.status(400).json({
                success: false,
                msg: "All fields are required",
            });
        }

        if (!/^\d{10}$/.test(mobile)) {
            return res.status(400).json({
                success: false,
                msg: "Mobile number must be a valid 10-digit number.",
            });
        }

        const data = new enqueryModel({
            name,
            mobile,
            email,
            comment,
            enquerySendTime: Date.now()
        })

        await data.save();

        return res.status(200).json({
            success: true,
            msg: "Enquiry submitted successfully.",
            data, // Optional: return the saved document if needed
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
}

export const getAllEnquery = async(req,res)=>{
    try {
        const allEnquery = await enqueryModel.find();

        // console.log(allEnquery)
         
        res.status(200).json({
            success: true,
            data: allEnquery,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
}

// faq

