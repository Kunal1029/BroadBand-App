import planModel from "../models/planModel.js"

export const getAllPlans = async (req, res) => {
    try {
        const allplans = await planModel.find();
        // console.log(response)
        res.status(200).json({
            success: true,
            data: allplans,
        });

    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({ success: false, msg: "Internal server error." });
    }
}


//not tested yet
export const addPlans = async (req, res) => {
    try {
        const { planName,
            mbps,
            Data,
            Validity,
            ott,
            price } = req.body;

        if (!planName || !mbps || !Data || !Validity || !ott || !price) {
            return res.status(400).json({
                success: false,
                msg: "All fields are required",
            });
        }


        const plandata = new planModel({
            planName,
            mbps,
            Data,
            Validity,
            ott,
            price
        })

        await plandata.save();

        return res.status(200).json({
            success: true,
            msg: "Plan Added successfully.",
            plandata, // Optional: return the saved document if needed
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
}

