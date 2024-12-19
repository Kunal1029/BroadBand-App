const express = require("express");
const router = express.Router();

const { getAllEnquery } = require("../controllers/enqueryController");
const { getAllPlans, addPlans } = require("../controllers/planController");
const { getAllUser, verifyAuthAllAdminRotes, adminlogin, adminForgetandChangePassword, checkForgetPasswordOtp, newAdminPassword } = require("../controllers/adminController.js")
const rateLimit = require("express-rate-limit");

// Rate limiter for the login endpoint
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 10,  // limit to 10 requests per windowMs
  message: "Too many login attempts from this IP, please try again after 15 minutes."
});


//dashboard
// router.route("/admindashboard").get(verifyAuthAllAdminRotes)

// User Enquiry
router.route("/allEnquery").get(verifyAuthAllAdminRotes, getAllEnquery);

// Plans
router.route("/allplan").get(getAllPlans);
router.route("/addNewPlan").post(verifyAuthAllAdminRotes, addPlans);

//Admin 
router.route("/users").get(verifyAuthAllAdminRotes , getAllUser);
router.route("/zetalogin").post(loginLimiter, adminlogin)
router.route("/changeadminpassword").post(adminForgetandChangePassword) //1 forgetpas
router.route("/verifyAdminOtp").post(checkForgetPasswordOtp) // 2 forgetpas
router.route("/passnewadmin").post(newAdminPassword) // 3 forgetpas

module.exports = router;