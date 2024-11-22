import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../OtherComponents/userSlice"; // Ensure correct import path
import { toast } from "react-hot-toast";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToken, setIsToken] = useState(!!localStorage.getItem("authToken")); // Check token on initial render
  const navbarRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return toast.error("No token found.");
    }

    try {
      await dispatch(logoutAction(token));
      setIsToken(false);
      localStorage.removeItem("authToken");
      toast.success("Logged out successfully.");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Error during logout.");
    }
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    },
    [navbarRef]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, handleClickOutside]);

  useEffect(() => {
    setIsToken(!!localStorage.getItem("authToken"));
  }, []);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
      <div className="container" ref={navbarRef}>
        <Link className="navbar-brand logo-text" to="/">
          <img src="./assets/images/FIW.png" alt="Logo" width="105" height="38" />
        </Link>

        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mainabout" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mainplan" onClick={() => setIsOpen(false)}>
                Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/maincontact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                <i className="fa-solid fa-circle-user fa-2xl" aria-label="User Menu"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {isToken ? (
                  <>
                    <li>
                      <span className="dropdown-item" onClick={handleLogout}>
                        LogOut
                      </span>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/myaccount">
                        My Account
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                <li>
                  <Link className="dropdown-item" to="/maincontact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
