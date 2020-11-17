import React, { useState } from "react";
import {
  AccordionDetails,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@material-ui/core";
import EducationDetailForm from "./EducationDetailForm";

const EmployeeGradEducation = ({ onUpdate, key }) => {
  const [gradCbk, setGradCbk] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);
  const closeUpdate = (values, key) => {
    setGradCbk(false);
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
                  checked={gradCbk}
                  onChange={(e) => {
                    setOpenPanel(e.target.checked);
                    return setGradCbk(e.target.checked);
                  }}
                  color="primary"
                />
              }
              label={
                <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                  Graduation
                </span>
              }
            />
          </FormGroup>
        </Grid>
        {openPanel && (
          <AccordionDetails show={gradCbk}>
            <EducationDetailForm
              show={gradCbk}
              onUpdate={closeUpdate}
              objKey={"gradEducation"}
            />
          </AccordionDetails>
        )}
      </Grid>
    
  );
};

export default EmployeeGradEducation;
