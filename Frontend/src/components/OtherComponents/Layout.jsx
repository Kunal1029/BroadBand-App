// Layout.js
import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer";
import Loader from "../Animation/Loader";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust time as needed
    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [location]);

  return (
    <div className="Mylayout">
      <div className={`${loading && "loaderRender"}`}>
        <Header />
      </div>

      {loading && (
        <div className="text-center row">
          <div className=" loaderBody  d-flex align-item-center justify-content-center">
            {/* <div className=""> */}
            <Loader />
            {/* </div> */}
          </div>
        </div>
      )}
      <div className={`${loading && "loaderRender"}`}>
        <Outlet />
      </div>
      {/* Renders the current route's component */}
      <div className={`${loading && "loaderRender"}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
