import { useState } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import Gradient from "../Animation/Gradient";
import { useNavigate } from "react-router-dom";
import { profileValidation } from "../helper/validate";
import { useDispatch, useSelector } from "react-redux";
import { fetchOtp, verifyUserOtp } from "../OtherComponents/userSlice.jsx";
import "./FormCss.css";

function UserLogin() {
  const [showErrors, setShowErrors] = useState(false); // Track if errors should be displayed
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { otpSent, isLoading, error } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      otp: "",
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const verifyPromise = dispatch(
          verifyUserOtp({ mobile: values.mobile, otp: values.otp })
        );
        toast.promise(verifyPromise, {
          loading: "Verifying OTP...",
          success: <b>OTP Verified Successfully!</b>,
          error: <b>Invalid OTP. Please try again.</b>,
        });

        const response = await verifyPromise;
        if (response.meta.requestStatus === "fulfilled") {
          navigate("/"); // Navigate to the home page after successful OTP verification
        }
      } catch (error) {
        toast.error(error.message || "Failed to verify OTP.");
      }
    },
  });

  const handleGetOtp = async () => {
    setShowErrors(true); // Trigger error display on button click
    const errors = await formik.validateForm(); // Manually trigger validation
    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors and try again.");
      return;
    }

    dispatch(
      fetchOtp({
        name: formik.values.name,
        mobile: formik.values.mobile,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("OTP Sent Successfully!");
      })
      .catch((err) => {
        toast.error(err || "Failed to send OTP.");
      });
  };

  return (
    <section className="registerForm">
      <div className="container">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="signupSection">
          <div className="info col-md-5">
            <h2>Welcome to 1Zeta</h2>
            <Gradient />
          </div>
          <form className="signupForm col-md-5" onSubmit={formik.handleSubmit}>
            <h2 className="mt-5 mb-3">Login</h2>
            <ul className="noBullet">
              <div className="text-start ms-5">
                <label htmlFor="name">Full Name</label>
                <li>
                  <input
                    type="text"
                    className="inputFields"
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    {...formik.getFieldProps("name")}
                    disabled={otpSent}
                  />
                  {showErrors && formik.errors.name && (
                    <p className="text-danger">{formik.errors.name}</p>
                  )}
                </li>
              </div>

              <div className="text-start ms-5">
                <label htmlFor="mobile">Mobile Number</label>
                <li>
                  <input
                    type="number"
                    className="inputFields"
                    id="mobile"
                    name="mobile"
                    placeholder="10 Digit Phone Number"
                    {...formik.getFieldProps("mobile")}
                    disabled={otpSent}
                  />
                  {showErrors && formik.errors.mobile && (
                    <p className="text-danger">{formik.errors.mobile}</p>
                  )}
                </li>
                {!otpSent && (
                  <button
                    type="button"
                    className="btn mt-2"
                    onClick={handleGetOtp}
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending OTP..." : "Get OTP"}
                  </button>
                )}
              </div>

              {otpSent && (
                <div className="text-start ms-5 mt-3">
                  <label htmlFor="OTP">OTP</label>
                  <li>
                    <input
                      type="text"
                      className="inputFields"
                      id="OTP"
                      name="otp"
                      placeholder="Enter OTP"
                      {...formik.getFieldProps("otp")}
                    />
                    {formik.touched.otp && formik.errors.otp && (
                      <p className="text-danger">{formik.errors.otp}</p>
                    )}
                  </li>
                </div>
              )}

              {otpSent && (
                <li id="center-btn">
                  <div className="my-3">
                    <button
                      className="btn"
                      type="submit"
                      disabled={formik.isSubmitting || isLoading}
                    >
                      Submit
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </form>
          {error && <p className="text-danger text-center">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default UserLogin;
