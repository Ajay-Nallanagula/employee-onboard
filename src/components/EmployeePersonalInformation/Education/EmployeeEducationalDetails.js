import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Title from "../../Title";
// import EmployeeEducationUniversities from "./EmployeeEducationUniversities";
 import EmployeeEducationUniversityModal from "../EmployeeEducationUniversityModal";

const EmployeeEducationalDetails = ({ formik }) => {
  const { handleChange, values } = formik;
  const [open, setOpen] = useState({ isOpen: false, name: "" });
  const [eduInstitutes,setEduInstitutes] = useState({institutes:{}})
  console.log({VALUES:formik.values})
  return (
    <Accordion style={{ padding: "10px" }}>
      <AccordionSummary>
        <Title variant="body1">Employee Education Details</Title>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.eduUnderGrad}
                    onChange={handleChange}
                    name="eduUnderGrad"
                    color="primary"
                  />
                }
                label={
                  <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                    Under Graduate
                  </span>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.eduGrad}
                    onChange={(e) => {
                      //setGrad(e.target.checked)
                      setOpen(() => ({
                        isOpen: e.target.checked,
                        name: e.target.name,
                      }));
                      return handleChange(e);
                    }}
                    name="eduGrad"
                    color="primary"
                  />
                }
                label={
                  <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                    Graduate
                  </span>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.eduDiploma}
                    onChange={(e) => {
                      // setDiploma(e.target.checked)
                      setOpen(() => ({
                        isOpen: e.target.checked,
                        name: e.target.name,
                      }));
                      return handleChange(e);
                    }}
                    name="eduDiploma"
                    color="primary"
                  />
                }
                label={
                  <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                    Diploma
                  </span>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.eduPostGrad}
                    onChange={(e) => {
                      // setPg(e.target.checked)
                      setOpen(() => ({
                        isOpen: e.target.checked,
                        name: e.target.name,
                      }));
                      return handleChange(e);
                    }}
                    name="eduPostGrad"
                    color="primary"
                  />
                }
                label={
                  <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
                    Post Graduate
                  </span>
                }
              />
            </FormGroup>
            <EmployeeEducationUniversityModal
              open={open}
              closeModal={setOpen}
              formikUpper={formik}
              eduInstitutes={eduInstitutes}
              setEduInstitutes={setEduInstitutes}
            />
          </Grid>

        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default EmployeeEducationalDetails;
