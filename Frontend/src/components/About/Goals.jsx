import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
function Goals() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="container-fluid">
      <Tabs value={value} onChange={handleChange} centered className="mb-5">
        <Tab label="Our Mission" className="text-white" />
        <Tab label="Our Vision" className="text-white" />
        <Tab label="Core Values" className="text-white" />
      </Tabs>

      <div className="mt-5 container">
        {value === 0 ? (
          <>
            Our mission is simple: to deliver affordable, dependable, and
            innovative internet solutions that empower communities to stay
            connected, informed, and productive in a digital world.
          </>
        ) : value === 1 ? (
          <>
            We envision a world where everyone has access to fast and reliable
            internet, no matter where they are. As we continue to grow, we’re
            dedicated to making high-speed, affordable internet a reality for
            every home and business we serve.
          </>
        ) : value === 2 ? (
          <div className="text-center">
            <ul>
              <li>
                Reliability: We prioritize consistent, high-quality connectivity
                for all users
              </li>
              <li>
                Affordability: High-speed internet shouldn’t come with a high
                price tag
              </li>
              <li>
                Innovation: We stay ahead with cutting-edge technology and
                evolving services
              </li>
              <li>
                Customer-Centricity: Your satisfaction is our top priority
              </li>
              <li>
                Trust: We build strong relationships through transparency and
                integrity
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="container mt-5 mb-5">
        <h2 className="text-center">Why Choose 1 Zeta?</h2>
        <p className="mt-4">
          - Customer-Focused Service: We&#39;re dedicated to supporting you, 24/7. -
          Affordable Plans: Quality internet at a price that suits your budget.
          - High-Performance Network: Speeds that keep you connected without
          interruption. - Seamless Installation: Easy setup to get you connected
          without hassle.
        </p>
      </div>

      <div className="container mt-5 mb-5">
        <h2 className="text-center">Join Us</h2>
        <p className="mt-4">
          At 1 Zeta, we believe that connectivity is a right, not a privilege.
          Join us as we continue to build a world where everyone can experience
          fast, reliable, and affordable internet.
        </p>
      </div>
    </Box>
  );
}

export default Goals;
