/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Plan.css";
import { Link } from "react-router-dom";
import { fetchAllPlans, payment } from "../OtherComponents/userSlice.jsx";
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
  const { allplans, isLoading, error } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
  // console.log("Lol DataCheckup " , allplans)

  const handlePay = async (PlanPrice, itemId, mobile) => {
    await handlePayment(PlanPrice, itemId, mobile); // Calls Razorpay helper
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
      className="plans d-flex align-items-center py-5 myplans"
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

                <div className={`mt-4 mb-4 mainPlanBtn temp767`}>
                  <button
                    className="btn text-dark"
                    // onClick={() => handlePay(p.price, index)}
                    onClick={onOpenModal}
                  >
                    Buy Now
                  </button>

                  {/* buy modal  */}
                  <Modal open={open} onClose={onCloseModal} center>
                    <h2>Simple centered modal</h2>
                  </Modal>
                  {/* buy modal end */}

                  <button className=" btn text-dark">
                    View Details <i className="fa-solid fa-circle-info"></i>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </Carousel>

        {/* End of carousel */}

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
