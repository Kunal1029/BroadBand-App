/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAccounts } from "../OtherComponents/userSlice"; // Adjust the import path
import "./User.css"
import UserAccount from "./UserAccount";

function MyAccount() {
  const dispatch = useDispatch();

  const _id = localStorage.getItem("id");
  // const email = localStorage.getItem("email");
  // const mobile = localStorage.getItem("mobile");
  const { userData, userOne, isLoading, error } = useSelector(
    (state) => state.user
  );

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
  }, [userData, userOne]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  //     console.log("pln", JSON.stringify(userData, null, 2)); // Pretty-print JSON data
  //   console.log("pln1", JSON.stringify(userOne, null, 2));
  //   console.log("pln2", JSON.stringify(usrDta, null, 2));
  return (
    <div
      // style={{ height: "500px" }}
      className="d-flex flex-column align-item-center justify-content-center m-auto bg-warning"
    >
      <div>
        {userOne ? (
          <div>
            {/* <p>Name: {userOne.name}</p>
            <p>Email: {userOne.email}</p>
            <p>Mobile: {userOne.mobile}</p> */}
            {/* <p>pln: {userData.planid[0]}</p> */}
          </div>
        ) : (
          <p>No user data found</p>
        )}
      </div>

      <UserAccount />

    </div>
  );
}

export default MyAccount;
