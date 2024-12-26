import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getOtp,
  verifyOtp,
  logoutUser,
  userEnquery,
  getAllEnquery,
  getPlans,
  addPlan,
  handlePayment,
  myacc,
  userAcc,
} from "../helper/helper"; // Ensure correct import path

// Async action to get OTP
export const fetchOtp = createAsyncThunk(
  "user/fetchOtp",
  async ({ name, mobile, email }, { rejectWithValue }) => {
    try {
      await getOtp({ name, mobile, email });
      return { name, mobile, email };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to send OTP.");
    }
  }
);

// Async action to verify OTP
export const verifyUserOtp = createAsyncThunk(
  "user/verifyOtp",
  async ({ mobile, email, otp }, { rejectWithValue }) => {
    try {
      const response = await verifyOtp({ mobile, email, otp });
      // console.log(" verifyUserOtp slice " + response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Invalid OTP.");
    }
  }
);

// Async action for user logout
export const logoutAction = createAsyncThunk(
  "user/logout",
  async (token, { rejectWithValue }) => {
    try {
      await logoutUser(token); // Call the logoutUser function in helper
      return "Logged out successfully."; // Return success message
    } catch (error) {
      return rejectWithValue(error.message || "Failed to log out.");
    }
  }
);

export const userEnqueries = createAsyncThunk(
  "user/enquiry",
  async ({ name, mobile, email, comment }, { rejectWithValue }) => {
    try {
      const response = await userEnquery({ name, mobile, email, comment });
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to sending query.");
    }
  }
);

// Async action to get all enquiries
export const fetchAllEnqueries = createAsyncThunk(
  "user/fetchAllEnqueries",
  async (_, { rejectWithValue }) => {
    // console.log("hi yo");
    try {
      const response = await getAllEnquery();
      // console.log("API Response:", response); // Log the response
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch enquiries.");
    }
  }
);

export const userAccounts = createAsyncThunk(
  "user/fetchusers",
  async ({ _id, mobile, email }, { rejectWithValue }) => {
    try {
      const data = await userAcc({ _id, mobile, email }); // `myacc` already returns `response.data`
      // console.log("slice = ", data.user)
      return data.user;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user");
    }
  }
);

export const myaccount = createAsyncThunk(
  "user/fetchUser",
  async ({ _id, mobile, email }, { rejectWithValue }) => {
    try {
      const data = await myacc({ _id, mobile, email }); // `myacc` already returns `response.data`
      // console.log("slice = ", data.user)
      return data.user;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user");
    }
  }
);

// plans

export const fetchAllPlans = createAsyncThunk(
  "user/fetchAllPlans",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPlans();
      // console.log("API plan Response:", response); // Log the response
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch enquiries.");
    }
  }
);

// add plan
export const addMorePlans = createAsyncThunk(
  "user/addOnePlan",
  async (
    { planName, mbps, Data, Validity, ott, price },
    { rejectWithValue }
  ) => {
    try {
      const response = await addPlan({
        planName,
        mbps,
        Data,
        Validity,
        ott,
        price,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to sending query.");
    }
  }
);

export const payment = createAsyncThunk(
  "user/payment",
  async (
    { _id, PlanPrice, itemId, mobile, email, name, agreeForPay },
    { rejectWithValue }
  ) => {
    try {
      // Delegate the logic to the helper function
      const response = await handlePayment(
        _id,
        PlanPrice,
        itemId,
        mobile,
        email,
        name,
        agreeForPay
      );
      console.log(response, " slice payment");
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Payment process failed.");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    // _id:"",
    name: "",
    mobile: "",
    otpSent: false,
    token: localStorage.getItem("authToken") || "",
    isAuthenticated: !!localStorage.getItem("authToken"),
    isLoading: false,
    error: null,
    email: "",
    comment: "",
    planName: "",
    mbps: "",
    Data: "",
    Validity: "",
    ott: "",
    price: "",
    PlanPrice: "",
    userData: {},
    itemId: "",
    enqueries: [], // Make sure this is an array
    allplans: [],
    order: null,
    userOne:""
  },

  reducers: {
    resetState: (state) => {
      state.name = "";
      state.mobile = "";
      state.otpSent = false;
      state.error = null;
      state.email = "";
      state.comment = "";
    },
  },
  extraReducers: (builder) => {
    builder

      //Handle Fetch user
      .addCase(userAccounts.pending, (state) => {
        state.status = "loading"; 
      })
      .addCase(userAccounts.fulfilled, (state,action) => {
        state.status = "succeeded"; 
        // state.userOne = action.payload._id
        state.userOne = { ...state.userOne, ...action.payload };

      })
      .addCase(userAccounts.rejected, (state, action) => {
        state.status = "failed"; 
        state.error = action.payload || "Failed to fetch user"; 
      })

      //Handle Fetch user
      .addCase(myaccount.pending, (state) => {
        state.status = "loading"; 
      })
      .addCase(myaccount.fulfilled, (state) => {
        state.status = "succeeded"; 
      })
      .addCase(myaccount.rejected, (state, action) => {
        state.status = "failed"; 
        state.error = action.payload || "Failed to fetch user"; 
      })

      // Handle payment plans
      .addCase(payment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(payment.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.PlanPrice = action.payload.PlanPrice;
        // state.itemId = action.payload.itemId;
        // state._id = action.payload.
        console.log("Pay " + action.payload);
      })
      .addCase(payment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle add new plans
      .addCase(addMorePlans.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addMorePlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planName = action.payload.planName;
        state.mbps = action.payload.mbps;
        state.Data = action.payload.Data;
        state.Validity = action.payload.Validity;
        state.ott = action.payload.ott;
        state.price = action.payload.price;
      })
      .addCase(addMorePlans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle Fetch All plans
      .addCase(fetchAllPlans.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allplans = action.payload; // Assuming response contains an array of enquiries
      })
      .addCase(fetchAllPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle Fetch All Enqueries
      .addCase(fetchAllEnqueries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllEnqueries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.enqueries = action.payload; // Assuming response contains an array of enquiries
      })
      .addCase(fetchAllEnqueries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle add new query
      .addCase(userEnqueries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userEnqueries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload.name;
        state.mobile = action.payload.mobile;
        state.email = action.payload.email;
        state.comment = action.payload.comment;
      })
      .addCase(userEnqueries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle OTP Fetch
      .addCase(fetchOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.otpSent = true;
        state.name = action.payload.name;
        state.mobile = action.payload.mobile;
        state.email = action.payload.email;
      })
      .addCase(fetchOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle OTP Verification
      .addCase(verifyUserOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // .addCase(verifyUserOtp.fulfilled, (state, action) => {
      //   console.log("verifyUserOtp fulfilled action:", action.payload); // Debugging
      //   state.isLoading = false;
      //   state.token = action.payload.token; // Set the token from verification response
      //   localStorage.setItem("authToken", state.token); // Save token to localStorage
      //   state.isAuthenticated = true; // Set authentication state to true
      // })
      .addCase(verifyUserOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        const token = action.payload.token;
        const id = action.payload.user._id;

        console.log("action.payload.user = ", action.payload.user);

        if (token) {
          // console.log("Setting token to localStorage:", token); // Debug log
          localStorage.setItem("authToken", token);
          localStorage.setItem("id", id);
          localStorage.setItem("isLoggedIn", "true");
          if (action.payload.user.email) {
            localStorage.setItem("email", action.payload.user.email);
          } else {
            localStorage.setItem("mobile", action.payload.user.mobile);
          }
          state.token = token;
          state.isAuthenticated = true;
          state.userData = { ...state.userData, ...action.payload.user };
        } else {
          console.error("No token in action.payload:", action.payload);
        }
      })

      .addCase(verifyUserOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle Logout
      .addCase(logoutAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isLoading = false;
        state.token = "";
        state.isAuthenticated = false;
        state.name = "";
        state.mobile = "";
        localStorage.removeItem("authToken"); // Remove token from localStorage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("id");
        localStorage.removeItem("email");
        localStorage.removeItem("mobile");
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = userSlice.actions;
export default userSlice.reducer;
