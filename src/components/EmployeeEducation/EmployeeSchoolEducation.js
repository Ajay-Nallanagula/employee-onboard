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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const EmployeeSchoolEducation = ({ onUpdate }) => {
  const [schoolCbk, setSchoolCbk] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);
  const closeUpdate = (values, key) => {
    setSchoolCbk(false);
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
                  checked={schoolCbk}
                  onChange={(e) => {
                    setOpenPanel(e.target.checked);
                    return setSchoolCbk(e.target.checked);
                  }}
                  color="primary"
                />
              }
              label={
                <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                  Under Graduation
                </span>
              }
            />
          </FormGroup>
        </Grid>
        {openPanel && (
          <AccordionDetails>
            <EducationDetailForm
              show={schoolCbk}
              onUpdate={closeUpdate}
              objKey="schoolEducation"
            />
          </AccordionDetails>
        )}
        
      </Grid>
    
  );
};

export default EmployeeSchoolEducation;
