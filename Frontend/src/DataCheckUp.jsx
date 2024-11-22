import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { payment } from "./components/OtherComponents/userSlice.jsx"; // Correct path
import { handlePayment } from "./components/helper/helper.js"; 

const DataCheckUp = () => {
  const dispatch = useDispatch();
  // const { itemId , PlanPrice , isLoading, error } = useSelector((state) => state.user);

  // Fetch available plans
  useEffect(() => {
    dispatch(payment());
  }, [dispatch]);

  const handlePay = async (PlanPrice, itemId) => {
    await handlePayment(PlanPrice, itemId); // Calls Razorpay helper
  };

  return (
    <div className="mt-5 mb-5">
      <h3>Available Plans</h3>
      

      <button onClick={() => handlePay(4361, 29)}>Pay Now</button>

    </div>
  );
};

export default DataCheckUp;
