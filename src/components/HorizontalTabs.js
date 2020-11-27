import React, { useState, useContext, useEffect } from "react";
import { Tabs, Tab } from "@material-ui/core";
import EmployeePersonalInformation from "./EmployeePersonalInformation/EmployeePersonalInformation";
import EmployeeStarterKit from "./EmployeeStarterKit/EmployeeStarterKit";
import EmployeeIdProofs from "./EmployeeIdProofs/EmployeeIdProofs";
import EmployeeEducation from "./EmployeeEducation/EmployeeEducation";
import { EmployeeOnBoard } from "./EmployeeOnBoard";
import { IncutContext } from "../context/IncutContext";
import { APPROVEDSTATUS } from "../Constants";

const HorizontalTabs = () => {
  const [value, setValue] = useState(1);
  const empContext = useContext(IncutContext);
  const { approvedStatus, employeePersonalInfomation } = empContext.formData;
  const isApproved = approvedStatus === APPROVEDSTATUS.APPROVED;
  const isEmpOnboarded = !!employeePersonalInfomation;
  const handleChange = (event, value) => {
    setValue(value);
  };

  const getTabInfo = (value) => {
    switch (value) {
      case 1: {
        return <EmployeePersonalInformation setTab={setValue} />;
      }
      case 2: {
        return <EmployeeEducation setTab={setValue} />;
      }
      case 3: {
        return <EmployeeIdProofs setTab={setValue} />;
      }
      case 4: {
        return <EmployeeOnBoard setTab={setValue} />;
      }
      case 5: {
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
        <Tab label="Employee Information" value={1} />
        <Tab label="Employee Education" value={2} />
        <Tab label="Employee Id Proofs" value={3} />
        {isEmpOnboarded && <Tab label="Employee OnBoard" value={4} />}
        {isApproved && <Tab label="Employee Starter Kit" value={5} />}
      </Tabs>

      {getTabInfo(value)}
    </>
  );
};
export default HorizontalTabs;

// variant="scrollable"
// scrollButtons="auto"
