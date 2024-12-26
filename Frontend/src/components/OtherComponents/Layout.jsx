// Layout.js
import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust time as needed
    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [location]);

  const isLoggedIn = localStorage.getItem("isLoggedIn")
  return (
    <div className="Mylayout">
      
        <div className={`${loading && "loaderRender"}`}>
          <Header isLoggedIn={isLoggedIn} />
        </div>

        {loading && (
          <div className="text-center row abs ">
            <div className=" loaderBody  d-flex align-item-center justify-content-center">
              {/* <div className=""> */}
              <div className="spinner-border text-primary " role="status">
                <span className="sr-only">Loading...</span>
              </div>
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
