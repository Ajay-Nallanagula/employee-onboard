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

const EmployeeDiplomaEducation = ({ onUpdate ,key}) => {
  const [diplomaCbk, setDiplomaCbk] = useState(false);
  const [openPanel,setOpenPanel] = useState(false)
  const closeUpdate = (values, key) => {
    setDiplomaCbk(false)
    setOpenPanel(false)
    return onUpdate(values, key);
  };


  return (
   
    <Grid container spacing={3}>
      <Grid item md={12}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={diplomaCbk}
                onChange={(e) => {
                  setOpenPanel(e.target.checked)
                  return setDiplomaCbk(e.target.checked);
                }}
                color="primary"
              />
            }
            label={
              <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                Diploma
              </span>
            }
          />
        </FormGroup>
      </Grid>
      {openPanel && <AccordionDetails show={diplomaCbk} >
        <EducationDetailForm
          show={diplomaCbk}
          onUpdate={closeUpdate}
          objKey='diplomaEducation'
        />
      </AccordionDetails>}
    </Grid>
    
  );
};

export default EmployeeDiplomaEducation;
