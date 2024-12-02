const express = require("express");
const router = express.Router();

const {
  userLogin,
  sendOtp,
  verifyOtp, 
  logout,
  createOrder,
  verifyPayment,
  verifyUser
} = require("../controllers/userController");

const { userEnquery, getAllEnquery } = require("../controllers/enqueryController");
const { getAllPlans, addPlans } = require("../controllers/planController");

const Auth = require("../middleWare/auth");

// Public routes
router.route("/login").get(userLogin);
router.route("/sendotp").post(sendOtp);
router.route("/verifyotp").post(verifyOtp);
router.route("/logout").post(logout);

// Payment
router.route("/createOrder").post(createOrder);
router.route("/verifyPayment").post(verifyPayment);

// router.route("/userVerify").post(verifyUser);

router.route('/authenticate').post(verifyUser, (req, res) => {
  res.status(201).send({ message: "User authenticated" });
});

// User Enquiry
router.route("/enquery").post(userEnquery);
router.route("/allEnquery").get(getAllEnquery);

// Plans
router.route("/planlist").get(getAllPlans);
router.route("/addNewPlan").post(addPlans);

module.exports = router;
