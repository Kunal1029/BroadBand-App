import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000"; // Update with your API base URL
// axios.defaults.baseURL = "https://apizeta.1zeta.com"; // Update with your API base URL
axios.defaults.timeout = 10000; // Set a timeout of 10 seconds for requests

// Send OTP

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
 

export async function getOtp(data) {
  try {
    const response = await axios.post(`/api/user/sendotp`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to send OTP.");
  }
}
 
// Verify OTP
export async function verifyOtp(data) {
  try {
    const response = await axios.post(`/api/user/verifyotp`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to verify OTP.");
  }
}

// Logout
export async function logoutUser(token) {
  try {
    const response = await axios.post(`/api/user/logout`, { token });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Failed to logout.");
  }
}

// Enqury's

export async function userEnquery(data) {
  try {
    const response = await axios.post('/api/user/enquery', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Failed to send enquery.");
  }
}

export async function getAllEnquery() {
  try {
    const response = await axios.get('/api/user/allEnquery');
    // console.log("Response data:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Error details:", error);  // Log the full error object
    throw new Error(error.response?.data?.msg || "Failed to send enquiry.");
  }
}

// plans
export async function getPlans() {
  try {
    const response = await axios.get('/api/user/planlist');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Failed to send enquery.");
  }
}


export async function addPlan(data) {
  try {
    const response = await axios.post('/api/user/addNewPlan', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Failed to send enquery.");
  }
}



// PaymentButton.jsx
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export async function handlePayment(PlanPrice, itemId, mobile, email, name ,agreeForPay ) {

  try {
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      return;
    }

    const orderUrl = "/api/user/createOrder";

    // Prepare payload to send to backend API
    const orderData = {
      itemId: itemId,
      amount: PlanPrice, //Price in paise
      name: name,
      email: email,
      mobile: mobile,
      agreeForPay: agreeForPay
    };

    // Create order on the backend
    const { data } = await axios.post(orderUrl, orderData);
    // console.log(data, "Order created");

    // Configure Razorpay options
    const options = {
      key: data.key, // Razorpay Key ID
      amount: data.order.amount, // Amount in paise
      currency: data.order.currency,
      name: name,
      description: "Good Plan Customize plan description in jsx",
      order_id: data.order.id, // Order ID returned by the backend

      // Payment success handler
      handler: async function (response) {
        // console.log(response, "Payment response");

        try {
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          // Verify payment with the backend
          const verificationResult = await axios.post("/api/user/verifyPayment", paymentData);

          if (verificationResult.data.success) {
            alert("Payment successful!");
          } else {
            alert("Payment verification failed.");
          }
        } catch (err) {
          console.error("Payment verification error:", err.message);
          alert("Unable to verify payment. Please contact support.");
        }


      },

      // Prefill customer information
      prefill: {
        name: name,
        email: email,
        contact: mobile,
      },

      // Theme customization
      theme: {
        color: "#F37254", // Customize the theme color
      },
    };

    // Initialize Razorpay instance
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    console.error("Payment failed:", error);
    alert("Unable to process payment. Please try again.");
  }
};



