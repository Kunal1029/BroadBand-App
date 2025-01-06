/* eslint-disable no-unused-vars */
// App.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAccounts } from "../OtherComponents/userSlice";
import DataTable from "react-data-table-component";
import "./User.css";

const UserAccount = () => {
  const dispatch = useDispatch();
  const [allPlans , setAllPlans] = useState([]);

  const _id = localStorage.getItem("id");
  // const email = localStorage.getItem("email");
  // const mobile = localStorage.getItem("mobile");
  const { userData, userOne, isLoading, error } = useSelector(
    (state) => state.user
  );

  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [usrDta, setUsrDta] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      await dispatch(userAccounts({ _id })); // Fetch user data from the server
    };

    fetchUserData();
  }, [_id, dispatch]);

  useEffect(() => {
    if (userData || userOne) {
      setUsrDta(userData); // Set user data after state updates
    }
    setAllPlans(userOne.fullPaymentDetails)
  }, [userData, userOne]);

  const TimestampToDate = (timestamp) => {
    // Convert seconds to milliseconds
    const date = new Date(timestamp * 1000);
  
    // Format the date for IST timezone
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
  
    const formattedDate = date.toLocaleString("en-IN", options);
    return formattedDate;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
4

  return (
    <section className="tg-may-account-wrapp tg">
      {userOne ? (
        
        <div className="inner">
          
          <div className="tg-account">
            {/* Account Banner */}
            <div className="account-banner">
              <div className="inner-banner">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 detail">
                      <div className="inner">
                        {/* <h2 className="page-title">My Account</h2> */}
                        <h2 className="user-name ">Hello {userOne.name}</h2>
                        <p className="description"></p>
                      </div>
                    </div>
                    <div className="col-md-4 profile">
                      <div className="profile">
                        <span className="image">
                          <img
                            src="https://res.cloudinary.com/templategalaxy/image/upload/v1631257421/codepen-my-account/images/profile_pdpo9w.png"
                            alt="Yash"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Tabs */}
                  <div className="nav-area">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "dashboard" ? "active" : "bg-warning"
                          }`}
                          onClick={() => handleTabClick("dashboard")}
                        >
                          <i className="fas fa-tachometer-alt"></i>{" "}
                          <span>Dashboard</span>
                        </button>
                      </li>
                      {/* jj */}
                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "myplan" ? "active" : "bg-warning"
                          }`}
                          onClick={() => handleTabClick("myplan")}
                        >
                          {/* <i className="fas fa-file-invoice"></i> */}
                          <i className="fa-solid fa-circle-check me-1"></i>
                          <span>My plan</span>
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "my-orders" ? "active" : "bg-warning"
                          }`}
                          onClick={() => handleTabClick("my-orders")}
                        >
                          <i className="fas fa-file-invoice"></i>{" "}
                          <span>Orders</span>
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "account-details"
                              ? "active"
                              : "bg-warning"
                          }`}
                          onClick={() => handleTabClick("account-details")}
                        >
                          <i className="fas fa-user-alt"></i>{" "}
                          <span>Account Details</span>
                        </button>
                      </li>

                      <li className="nav-item">
                        <button
                          className={`nav-link ${
                            activeTab === "logout" ? "active" : "bg-warning"
                          }`}
                          onClick={() => handleTabClick("logout")}
                        >
                          <i className="fas fa-sign-out-alt"></i>{" "}
                          <span>Logout</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="tabs tg-tabs-content-wrapp">
              <div className="inner">
                <div className="container">
                  {activeTab === "dashboard" && (
                    <div className="my-account-dashboard">
                      <div className="inner">
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <div
                              className="card"
                              onClick={() => handleTabClick("my-orders")}
                            >
                              <div className="card-body text-center">
                                <a>
                                  <img
                                    src="https://res.cloudinary.com/templategalaxy/image/upload/v1631257421/codepen-my-account/images/orders_n2aopq.png"
                                    alt="Orders"
                                  />
                                </a>
                                <h2>Your Orders</h2>
                                <p>View and manage your orders.</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 mb-3">
                            <div
                              className="card"
                              onClick={() => handleTabClick("account-details")}
                            >
                              <div className="card-body text-center">
                                <a>
                                  <img
                                    src="https://res.cloudinary.com/templategalaxy/image/upload/v1631257421/codepen-my-account/images/login_aq9v9z.png"
                                    alt="Account"
                                  />
                                </a>
                                <h2>Account Details</h2>
                                <p>Update your account information.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "my-orders" && (
                    <div id="my-orders ">
                      
                        <DataTable className="p-1"
                        title="Plan History"
                        columns={[
    

                          { name: "Plan id", selector: (allPlans) => allPlans.id },
                          { name: "Date", selector: (allPlans) => TimestampToDate(allPlans.created_at) },
                          { name: "Amount", selector: (allPlans) => allPlans.amount +" " + allPlans.currency },
                          { name: "Mobile", selector: (allPlans) => allPlans.notes.mobile },
                          { name: "Email", selector: (allPlans) => allPlans.notes.email },
                          // { name: "More", selector: (allPlans) => <button className="btn py-1 text-dark mt-2 mb-2">More</button>},
                          { name: "More", selector: (allPlans) => <i className="fa-solid fa-circle-info"></i>},
                          { name: "Receipt", selector: (allPlans) => <i className="fa-solid fa-download"></i>},
                          { name: "Invoice", selector: (allPlans) => <i className="fa-solid fa-download"></i>},
                        ]}
                        data={allPlans}
                        defaultSortFieldId={1}
                       
                      />
                      
                      
                    </div>
                  )}

                  {activeTab === "myplan" && (
                    <div id="myplan">
                      <form>
                        <div className="form-group">
                          <label>myplan</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group">
                          <label>myplan 2</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                        <button className="btn btn-primary">Update</button>
                      </form>
                    </div>
                  )}

                  {activeTab === "account-details" && (
                    <div id="account-details">
                      <form>
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                        <button className="btn btn-primary">Update</button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </section>
  );
};

export default UserAccount;
