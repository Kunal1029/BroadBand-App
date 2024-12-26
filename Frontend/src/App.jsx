/* eslint-disable react/prop-types */
// App.js
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/OtherComponents/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Plan from "./components/Plans/Plan";
import MainAbout from "./components/About/MainAbout";
import MainPlan from "./components/Plans/MainPlan";
import MainContact from "./components/Contact/MainContact";
import NewUserRegister from "./components/RegisterLogin/NewUserRegister";
import UserLogin from "./components/RegisterLogin/UserLogin";
import DataCheckUp from "./DataCheckUp.jsx";
import Lkg from "./L.jsx";
import MyAccount from "./components/UserAccount/MyAccount.jsx";
import ProtectedRoute from "./components/helper/ProtectedRoute.jsx";

function App() {
  const token = localStorage.getItem("authToken");
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="plans" element={<Plan />} />
          <Route path="mainabout" element={<MainAbout />} />
          <Route path="mainplan" element={<MainPlan />} />
          <Route path="maincontact" element={<MainContact />} />

          {/* unauthorised route */}
          {!isLoggedIn && (
            <>
              <Route path="register" element={<NewUserRegister />} />
              <Route path="login" element={<UserLogin />} />
            </>
          )}

          <Route path="/lol" element={<DataCheckUp />} />
          <Route path="/ss" element={token ? <Lkg /> : ""} />

          <Route element={<ProtectedRoute />}>
            <Route path="register" element={<Navigate to="/" />} />
            <Route path="login" element={<Navigate to="/" />} />
            <Route path="/user-details" element={<MyAccount />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
