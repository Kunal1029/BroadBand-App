const planModel = require("../models/planModel");

const getAllPlans = async (req, res) => {
  try {
    const allplans = await planModel.find();
    res.status(200).json({
      success: true,
      data: allplans,
    });
  } catch (error) {
    console.error("Error fetching plans:", error);
    return res.status(500).json({ success: false, msg: "Internal server error." });
  }
};

const addPlans = async (req, res) => {
  try {
    const { planName, mbps, Data, Validity, ott, price } = req.body;

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
      price,
    });

    await plandata.save();

    return res.status(200).json({
      success: true,
      msg: "Plan added successfully.",
      plandata, // Optional: return the saved document if needed
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

// Export the functions
module.exports = {
  getAllPlans,
  addPlans,
};
