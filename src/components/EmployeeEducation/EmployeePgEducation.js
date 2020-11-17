import React, { useState } from "react";
import {
  AccordionDetails,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper
} from "@material-ui/core";

import EducationDetailForm from "./EducationDetailForm";

const EmployeePgEducation = ({ onUpdate ,key}) => {
  const [pgCbk, setPgCbk] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);

  const closeUpdate = (values, key) => {
    setPgCbk(false);
    setOpenPanel(false);
    return onUpdate(values, key);
  };
  return (
    
    <Grid container spacing={3}>
      <Grid item md={12}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={pgCbk}
                onChange={(e) => {
                  setOpenPanel(e.target.checked);
                  return setPgCbk(e.target.checked);
                }}
                color="primary"
              />
            }
            label={
              <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                Post Graduation
              </span>
            }
          />
        </FormGroup>
      </Grid>
      {openPanel && (
        <AccordionDetails show={pgCbk}>
          <EducationDetailForm
            show={pgCbk}
            onUpdate={closeUpdate}
            objKey="pgEducation"
          />
        </AccordionDetails>
      )}
    </Grid>
    
  );
};

export default EmployeePgEducation;
