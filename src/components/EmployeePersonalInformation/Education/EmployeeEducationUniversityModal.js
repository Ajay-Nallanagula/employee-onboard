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
import { useFormik } from "formik";

const findKey = (name)=>{
  switch(name){
    case 'eduUnderGrad':{    return 'eduSchool'    }
    case 'eduGrad':{return 'eduGradCollege'    }
    case 'eduDiploma' :{return 'eduDiplomaCollege'}
    case 'eduPostGrad' :{return 'eduPostGradCollege'}
    default: return ''
  }
}

const EmployeeEducationUniversityModal = ({
  open,
  closeModal,
  eduInstitutes,
  setEduInstitutes,
  formikUpper
}) => {
  // const { handleChange, handleBlur, values } = formik;
  const [scroll] = useState("paper");
  const formik = useFormik({
    initialValues: { eduSchoolName: "" },
    enableReinitialize:true,
    onSubmit: (formikValues) => {
      const {name} = open
      const key = findKey(name)
      const {values} = formikUpper
      values[key] = {...values[key],eduSchoolName:formikValues.eduSchoolName}
      formikUpper.values= {...values}
      formikValues.eduSchoolName = ""
      return closeModal(false);
    },
  });
  const { handleChange, handleBlur, values, handleSubmit } = formik;
  return (
    <Dialog open={open.isOpen} scroll={scroll}>
      <DialogTitle>
        <Title variant="body1">Employee Education Details</Title>
      </DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <form submit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TextBox
                id="outlined-required"
                value={values.eduSchoolName}
                label="School Name"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                name="eduSchoolName"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => closeModal(false)}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeEducationUniversityModal;
