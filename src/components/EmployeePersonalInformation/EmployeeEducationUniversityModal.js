import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Grid,
} from "@material-ui/core";
import Title from "../Title";
import { TextBox } from "../../controls/TextBox";

const EmployeeEducationUniversityModal = ({ open, closeModal, formik }) => {
  const { handleChange, handleBlur, values } = formik;
  const {
    eduSchoolName,
    eduPassOutYear,
    eduPercentage,
    eduMedium,
  } = formik.values;
  const { isOpen, name } = open;
  const isSchool = name === "eduUnderGrad";
  const [scroll] = useState("paper");
  const [state, setState] = useState({
    eduSchoolName,
    eduPassOutYear,
    eduPercentage,
    eduMedium,
  });

  const onUpdateButtonClick = (formik, name) => {
    const {
      eduSchoolName,
      eduPassOutYear,
      eduPercentage,
      eduMedium,
    } = formik.values;
    const updatedValues = {
      eduSchoolName,
      eduPassOutYear,
      eduPercentage,
      eduMedium,
    };

    switch (name) {
      case "eduUnderGrad": {
        formik.values.eduSchool = { ...updatedValues, level: "School" };
        break;
      }
      case "eduGrad": {
        formik.values.eduGradCollege = {
          ...updatedValues,
          level: "Graduation",
        };
        break;
      }
      case "eduDiploma": {
        formik.values.eduDiplomaCollege = {
          ...updatedValues,
          level: "Diploma",
        };
        break;
      }
      case "eduPostGrad": {
        formik.values.eduPostGradCollege = {
          ...updatedValues,
          level: "Post Graduation",
        };
        break;
      }
      default:
        break;
    }
  };

  return (
    <Dialog open={isOpen} scroll={scroll}>
      <DialogTitle>
        <Title variant="body1">Employee Education Details</Title>
      </DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextBox
              id="outlined-required"
              label={isSchool ? "School Name" : "College Name"}
              onChange={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  [name]: { ...prevState[name], eduSchoolName },
                }));
                return handleChange(e);
              }}
              variant="outlined"
              name="eduSchoolName"
            />
          </Grid>
          <Grid item md={12}>
            <TextBox
              id="outlined-required"
              label="Year of Passing"
              onChange={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  [name]: { ...prevState[name], eduPassOutYear },
                }));
                return handleChange(e);
              }}
              variant="outlined"
              name="eduPassOutYear"
            />
          </Grid>
          <Grid item md={12}>
            <TextBox
              id="outlined-required"
              label="Percentage"
              onChange={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  [name]: { ...prevState[name], eduPassOutYear },
                }));
                return handleChange(e);
              }}
              variant="outlined"
              name="eduPercentage"
            />
          </Grid>
          <Grid item md={12}>
            <TextBox
              id="outlined-required"
              label="Medium"
              onChange={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  [name]: { ...prevState[name], eduPassOutYear },
                }));
                return handleChange(e);
              }}
              variant="outlined"
              name="eduMedium"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => closeModal(false)}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
              console.log({state})
            onUpdateButtonClick(formik, name);
            return closeModal(false);
          }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeEducationUniversityModal;
