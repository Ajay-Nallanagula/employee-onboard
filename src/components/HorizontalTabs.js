import React, { useState } from "react";
import {  Tabs, Tab} from "@material-ui/core";
import EmployeePersonalInformation from "./EmployeePersonalInformation/EmployeePersonalInformation";
import EmployeeStarterKit from "./EmployeeStarterKit/EmployeeStarterKit";
import EmployeeIdProofs from "./EmployeeIdProofs/EmployeeIdProofs";

const HorizontalTabs = () => {
  const [value, setValue] = useState(1);
  const handleChange = (event, value) => {
    setValue(value);
  };

  const getTabInfo = (value) => {
    switch (value) {
      case 1: {
        return <EmployeePersonalInformation />;
      }
      case 2: {
        return <EmployeeIdProofs />;
      }
      case 3: {
        return <EmployeeStarterKit />;
      }
      default:
        return "Nothing selected";
    }
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label='Employee Information' value={1} />
        <Tab label='Employee Id Proofs' value={2}/>
        <Tab label='Employee Starter Kit' value={3} />
      </Tabs>

      {getTabInfo(value)}
    </>
  );
};
export default HorizontalTabs;

// variant="scrollable"
// scrollButtons="auto"