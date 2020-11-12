import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@material-ui/core";
import Title from "../Title";
import CurrentAddress from "./CurrentAddress";
import PermanentAddress from "./PermanentAddress";

const EmployeeContactDetails = ({ formik }) => {
  return (
    <Accordion style={{ padding: "10px" }}>
      <AccordionSummary>
        <Title variant="body1">Employee Contact Details</Title>
      </AccordionSummary>
      <AccordionDetails>
      <Grid container spacing={3}>
          <CurrentAddress formik={formik} />
          <PermanentAddress formik={formik} />
        </Grid>
        
      </AccordionDetails>
    </Accordion>
  );
};

export default EmployeeContactDetails;
