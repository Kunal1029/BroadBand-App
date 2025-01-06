/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Plan.css";
import { Link } from "react-router-dom";
import { fetchAllPlans, payment , userAccounts } from "../OtherComponents/userSlice.jsx";
import { handlePayment } from "../helper/helper.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// Define responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 1,
  },
};

function Plan() {
  const dispatch = useDispatch();

  const _id = localStorage.getItem("id");
  // const email = localStorage.getItem("email");
  // const mobile = localStorage.getItem("mobile");
  const { userData, userOne, allplans, isLoading, error } = useSelector((state) => state.user);

  const [usrDta,setUsrDta] = useState({})

  useEffect(()=>{
    if(_id){
      const fetchUserData = async () => {
        await dispatch(userAccounts({ _id })); // Fetch user data from the server
      };
      fetchUserData();
    }
    
    
    
  },[_id, dispatch])

  useEffect(() => {
    if (userData || userOne) {
      setUsrDta(userData); // Set user data after state updates
    }
  }, [userData , userOne]);

  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agreeForPay: "",
  });

  useEffect(() => {
    // Initialize formData when usrDta updates
    setFormData((prevData) => ({
      ...prevData,
      name: userData.name || userOne.name || "", // Default to userOne.name if available
      email: userData.email || userOne.email || "",
      mobile: userData.mobile || userOne.mobile || "",
    }));
  }, [usrDta , userData , userOne]);

  // console.log("pln", JSON.stringify(userData, null, 2)); // Pretty-print JSON data
  // console.log("pln1", JSON.stringify(userOne, null, 2));
  // console.log("pln2", JSON.stringify(usrDta, null, 2));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, // Update corresponding field
    });
  };

  const onOpenModal = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
    setSelectedPlan(null);
  };

  const ValidityPeriod = (validityMonths) => {
    const startDate = new Date();
    const endDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + validityMonths,
      startDate.getDate()
    );

    // Formatting dates to "dd MMM yyyy"
    const formatOptions = { day: "2-digit", month: "short", year: "numeric" };
    const formattedStartDate = new Intl.DateTimeFormat(
      "en-GB",
      formatOptions
    ).format(startDate);
    const formattedEndDate = new Intl.DateTimeFormat(
      "en-GB",
      formatOptions
    ).format(endDate);

    return `${formattedStartDate} to ${formattedEndDate}`;
  };

  useEffect(() => {
    dispatch(fetchAllPlans());
  }, [dispatch]);

  useEffect(() => {
    dispatch(payment());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handlePay = async (plan, id) => {
    if (selectedPlan) {
      await handlePayment(
        plan,
        id,
        formData.mobile,
        formData.email,
        formData.name,
        formData.agreeForPay,
        _id
      );
    }

    setFormData("");
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        className="custom-left-arrow"
        onClick={onClick}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        className="custom-right-arrow"
        onClick={onClick}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    );
  };

  return (
    <section
      className="plans d-flex align-items-center py-1 myplans"
      style={{ height: "100%" }}
      id="plans"
    >
      <div className="container text-light mt-5">
        <div className="text-center pb-4">
          <p>OUR PLANS</p>
          <h2 className="py-2 mb-3">Explore unlimited possibilities</h2>
          <p className="para-light">
            From casual browsing to non-stop streaming, 1 Zeta Fiber has a plan
            that fits your lifestyle. Enjoy high-speed, reliable internet at
            prices that suit any budget.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={500}
          containerclassName="carousel-container"
          // removeArrowOnDeviceType={["tablet"]}
          itemclassName="carousel-item-padding-40-px"
          arrows
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {/* Dynamically render plan cards */}
          {allplans.map((p, index) => (
            <div
              key={index}
              className="card text-dark px-4 mt-4 ms-2 me-2 mb-4 bg-white homePlans"
            >
              <div className=" ms-4">
                <span className="badge bg-primary border border-rounded mt-4 mb-4 p-2">
                  {p.ott ? "Zeta Popular Plan" : "Zeta Value Pack"}
                </span>
                <div className="d-flex gap-2">
                  <h2>₹{p.price}</h2>

                  <span className="gray">+GST</span>
                </div>
                {p.ott ? "" : <div className="nonOtpSpace"></div>}
                {p.ott && (
                  <div className="SMediaPlan">
                    <div className="SMtagsPlan">
                      <div className="smGap">
                        <img src="./assets/images/sm/hotstar.jpeg" />
                        <img src="./assets/images/sm/sony.jpeg" />
                      </div>
                      <p className="gray">+9 more</p>
                    </div>
                  </div>
                )}

                <div className={`mainPlanLine  mt-3 mb-4 me-auto`}></div>

                <div className="valData">
                  <div className="validity">
                    <p className="gray"> Validity</p>{" "}
                    <span>{p.Validity === "Monthly" ? "30 Days" : ""}</span>
                  </div>

                  <div className="data">
                    <p className="gray">Data</p>{" "}
                    <span>
                      {" "}
                      {p.Data} @{p.mbps} Mbps
                    </span>
                  </div>
                </div>

                <div className={`mt-4 mb-4 mainPlanBtn temp767 `}>
                  <button
                    className="btn text-dark"
                    // onClick={() => handlePay(p.price, index)}
                    onClick={() => onOpenModal(p)}
                  >
                    Buy Now ₹{p.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* End of carousel */}

        {/* buy modal  */}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            overlay: { background: "rgba(194, 196, 209, 0.05)" },
            modal: {
              borderRadius: "10px",
              padding: "20px",
              marginTop: "70px",
            },
          }}
        >
          {selectedPlan && (
            <form
              className="payModal"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                handlePay(
                  selectedPlan.price,
                  selectedPlan._id,
                  formData.mobile, // Dynamic mobile
                  formData.name, // Dynamic name
                  formData.email, // Dynamic email
                  formData.agreeForPay
                ); // Call your payment logic
              }}
            >
              <h5 className="text-center mt-3 mb-4">
                Please Check below details
              </h5>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={formData.name} // Bind to state
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email} // Bind to state
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Phone Number *
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="mobile"
                  required
                  value={formData.mobile} // Bind to state
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4 mt-4">
                <h5>Plan Details</h5>

                <ul className="dots">
                  <li>
                    Validity : {selectedPlan.Validity} ({ValidityPeriod(1)})
                  </li>
                  <li>
                    {selectedPlan.Data} @{selectedPlan.mbps} Mbps
                  </li>
                  <li>
                    {selectedPlan.ott ? "9+ OTT Included" : "Non OTT plan."}
                  </li>
                </ul>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeCheck"
                  required
                  checked={formData.agreeForPay} // Bind to state with 'checked'
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeForPay: e.target.checked, // Update state based on checkbox status
                    })
                  }
                />
                <label className="form-check-label" htmlFor="agreeCheck">
                  I agree
                </label>
              </div>
              <button type="submit" className="btn text-dark" >
                Pay ₹{selectedPlan.price}
              </button>
            </form>
          )}
        </Modal>
        {/* buy modal end */}

        <div className="my-3 text-center mt-5 mb-5">
          <Link className="btn" to={"/mainplan"}>
            View All Plans
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Plan;
