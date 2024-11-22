// import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { enqueryValidation } from "../helper/validate"; // Importing validation
import { userEnqueries } from "../OtherComponents/userSlice"; // Redux action
import toast ,{Toaster} from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      comment: "",
    },
    validate: enqueryValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      try {
        const enquiryPromise = dispatch(
          userEnqueries({
            name: values.name,
            mobile: values.mobile,
            email: values.email,
            comment: values.comment,
          })
        ); // Dispatching Redux action
        await toast.promise(enquiryPromise, {
          loading: "Submitting your query...",
          success: "Thanks for your query! Will Conact you soon.",
          error: "Failed to submit. Please try again.",
        });

        const response = await enquiryPromise;
        if (response.meta.requestStatus === "fulfilled") {
          resetForm(); // Clear form fields
          // toast.success("Your query was submitted successfully!"); // Success message
          // navigate("/"); // Navigate after successful submission
        }
      } catch (error) {
        toast.error(error.message || "Error occurred during submission.");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set all fields as touched to show errors
    formik.setTouched({
      name: true,
      mobile: true,
      email: true,
      comment: true,
    });
    formik.handleSubmit();
  };

  return (
    <div>
      {/* Contact Section */}
      <section className="contact d-flex align-items-center py-5" id="contact">
      <Toaster position="top-center" reverseOrder={false} />
        <div className="container-fluid contact text-light">
          <div className="row myRow">
            {/* Left Section */}
            <div
              className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center px-lg-5"
              data-aos="fade-right"
            >
              <div style={{ width: "90%" }}>
                <div className="text-center text-lg-start py-4 pt-lg-0">
                  <p>CONTACT</p>
                  <h2 className="py-2">Send your query</h2>
                  <p className="para-light">
                    At 1 Zeta, we’re dedicated to providing you with the best
                    service and support. Whether you’re interested in a new
                    plan, need help with your current service, or just have
                    questions, feel free to reach out. We’re only a message
                    away!
                  </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group py-2">
                        <input
                          type="text"
                          className="form-control form-control-input"
                          placeholder="Enter name"
                          name="name"
                          {...formik.getFieldProps("name")}
                        />
                        {formik.touched.name && formik.errors.name && (
                          <div className="error">{formik.errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group py-2">
                        <input
                          type="number"
                          className="form-control form-control-input"
                          placeholder="Enter phone number"
                          name="mobile"
                          {...formik.getFieldProps("mobile")}
                        />
                        {formik.touched.mobile && formik.errors.mobile && (
                          <div className="error">{formik.errors.mobile}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group py-1">
                    <input
                      type="email"
                      className="form-control form-control-input"
                      placeholder="Enter email"
                      name="email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="error">{formik.errors.email}</div>
                    )}
                  </div>
                  <div className="form-group py-2">
                    <textarea
                      className="form-control form-control-input"
                      rows="6"
                      placeholder="Message"
                      name="comment"
                      {...formik.getFieldProps("comment")}
                    ></textarea>
                    {formik.touched.comment && formik.errors.comment && (
                      <div className="error">{formik.errors.comment}</div>
                    )}
                  </div>
                  <div className="my-3">
                    <button
                      type="submit"
                      className="btn form-control-submit-button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-6 myMap" data-aos="fade-down">
              <h2>Check Our Location directly</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3445.2800904882497!2d77.99369847519844!3d30.28608697480281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBhanot%20Market%2C%201%20Turner%20Road%2C%20Majra%2C%20Dehradun%2C%20Uttarakhand%20-%20248002!5e0!3m2!1sen!2sin!4v1731143746008!5m2!1sen!2sin"
                style={{ border: "0", borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location - Bhanot Market, Dehradun"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
