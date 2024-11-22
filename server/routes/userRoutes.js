import express from "express";
const router = express.Router();
import {
  userLogin,
  sendOtp,
  verifyOtp, 
  logout,
  createOrder,verifyPayment ,
  verifyUser
} from "../controllers/userController.js";

import { userEnquery , getAllEnquery } from "../controllers/enqueryController.js";
import { getAllPlans , addPlans } from "../controllers/planController.js";

import Auth from "../middleWare/auth.js";

//Public routes
router.route("/login").get(userLogin);
router.route("/sendotp").post(sendOtp);
router.route("/verifyotp").post(verifyOtp);
router.route("/logout").post(logout);

// payment
router.route("/createOrder").post(createOrder);
router.route("/verifyPayment").post(verifyPayment);

// router.route("/userVerify").post(verifyUser);

router.route('/authenticate').post(verifyUser, (req, res) => {
  res.status(201).send({ message: "User authenticated" });
});      

//user enquery
router.route("/enquery").post(userEnquery);
router.route("/allEnquery").get(getAllEnquery);

//plans
router.route("/planlist").get(getAllPlans)
router.route("/addNewPlan").post(addPlans)

export default router;
 