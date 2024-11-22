import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Plan.css";
import { Link } from "react-router-dom";
import { fetchAllPlans , payment  } from "../OtherComponents/userSlice.jsx";
import { handlePayment } from "../helper/helper.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


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

  const handlePay = async (PlanPrice, itemId , mobile) => {
    await handlePayment(PlanPrice, itemId , mobile); // Calls Razorpay helper
  };

  return (
    <section
      className="plans d-flex align-items-center py-5 myplans "
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
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
          arrows
        >
          {/* Dynamically render plan cards */}
          {allplans.map((p, index) => (
            <div
              key={index}
              className="card text-dark px-4 mt-4 ms-2 me-2 mb-4 bg-white"
            >
               <div className=" ms-4">
                <span className="badge bg-primary border border-rounded mt-4 mb-4 p-2">
                  {p.ott ? "Zeta Popular Plan" : "Zeta Value Pack"}
                </span>
                <div className="d-flex gap-2">
                  <h2>{p.price}</h2>
                  <span className="gray">+GST</span>
                </div>
                {p.ott ? "": <div className="nonOtpSpace"></div>}
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

                <div className={`mainPlanLine  mt-3 mb-4`}></div>

                <div className="valData">
                  <div className="validity">
                    <p className="gray"> Validity</p>{" "}
                    {p.Validity === "Monthly" ? "30 Days" : ""}
                  </div>
                  <div className="data">
                    <p className="gray">Data</p> {p.Data} @{p.mbps} Mbps
                  </div>
                </div>

                <div  className={`mt-4 mb-4 mainPlanBtn`}>
                  <button
                    className="btn text-dark"
                    onClick={() => handlePay(p.price, index)}
                  >
                    Buy Now
                  </button>
                  <button className=" btn text-dark">View Details</button>
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
