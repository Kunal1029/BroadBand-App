/* eslint-disable no-unused-vars */
import "react-multi-carousel/lib/styles.css";
import "./Plan.css";
import { fetchAllPlans, payment } from "../OtherComponents/userSlice.jsx";
import { handlePayment } from "../helper/helper.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Accordian from "./Accordian.jsx";

function MainPlan() {
  const dispatch = useDispatch();
  const [withs, setwiths] = useState(false);
  const { allplans, isLoading, error } = useSelector((state) => state.user);
  const [withOTT, setWithOtt] = useState(allplans);

  function oots() {
    console.log(withOTT);
  }

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

  const handlePay = async (PlanPrice, itemId) => {
    await handlePayment(PlanPrice, itemId); // Calls Razorpay helper
  };

  return (
    <section
      className="plans d-flex align-items-center planPad myplans "
      style={{ height: "100%" }}
      id="plans"
    >
      <div className="container text-light mt-5">
        <div className="text-center pb-4">
          {/* <button onClick={oots}>is OTT</button> */}
          <p>OUR PLANS</p>
          <h2 className="py-2 mb-3">Explore unlimited possibilities</h2>
          <p className="para-light">
            From casual browsing to non-stop streaming, 1 Zeta Fiber has a plan
            that fits your lifestyle. Enjoy high-speed, reliable internet at
            prices that suit any budget.
          </p>
        </div>

        {/* <Accordian /> */}

        <div className="container-fluid  mainPlans text-dark ">
          {allplans.map((p, i) => (
            <div
              key={i}
              className=" border bg-white p-2 div1 mb-5"
            >
              <div className=" ms-4">
                <span className="badge bg-primary border border-rounded mt-4 mb-4 p-2">
                  {p.ott ? "Zeta Popular Plan" : "Zeta Value Pack"}
                </span>
                <div className="d-flex gap-2">
                  <h2>{p.price}</h2>
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

                <div className={`mt-4 mb-4 mainPlanBtn`}>
                  <button
                    className="btn text-dark"
                    onClick={() => handlePay(p.price, i)}
                  >
                    Buy Now
                  </button>
                  <button className=" btn text-dark" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">View Details <i className="fa-solid fa-circle-info"></i></button>
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainPlan;
