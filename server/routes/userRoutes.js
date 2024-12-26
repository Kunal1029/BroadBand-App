const express = require("express");
const router = express.Router();
// const { verifyAdminRole } = require("../helper/utils.js")

const {
  userLogin,
  sendOtp,
  verifyOtp,
  logout,
  createOrder,
  verifyPayment,
  verifyUser,
  sendOtpMail,
  myaccount,
  userOne
} = require("../controllers/userController");

const { userEnquery } = require("../controllers/enqueryController");
const { getAllPlans } = require("../controllers/planController");
const Auth = require("../middleWare/auth");

// Public routes
router.route("/login").get(userLogin);
router.route("/sendotp").post(sendOtp);
router.route("/verifyotp").post(verifyOtp);
router.route("/logout").post(logout);
router.route("/zetaMail").post(sendOtpMail);
router.route("/myacc").get(myaccount)
router.route("/useraccount").get(userOne)


// Payment
router.route("/createOrder").post(createOrder);
router.route("/verifyPayment").post(verifyPayment);

// router.route("/userVerify").post(verifyUser);

router.route('/authenticate').post(verifyUser, (req, res) => {
  res.status(201).send({ message: "User authenticated" });
});

// User Enquiry
router.route("/enquery").post(userEnquery);

// Plans
router.route("/planlist").get(getAllPlans);


module.exports = router;
