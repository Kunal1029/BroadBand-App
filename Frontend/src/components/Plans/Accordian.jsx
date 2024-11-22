import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Accordian() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }} className="glass container-fluid">
      <Tabs value={value} onChange={handleChange} centered className="mb-5">
        <Tab label="Value Plans" />
        <Tab label="Popular Plans" />
      </Tabs>

      <div className="mt-5">
        {value === 0 ? (
          <>
            
          </>
        ) : value === 1 ? (
          <>
            Non OTTs plan
          </>
        ) : (
          ""
        )}
      </div>
      
    </Box>
  );
}

export default Accordian;
