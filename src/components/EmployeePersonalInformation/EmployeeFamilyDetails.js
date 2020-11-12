import React from "react";
import { Grid } from "@material-ui/core";
import { TextBox } from "../../controls/TextBox";
import { errorMsg } from "./EmployeePersonalInformation.utils";

const EmployeeFamilyDetails = ({formik}) => {
  const { values, handleChange, errors, touched ,handleBlur} = formik
  return (
    <Grid container spacing={3}>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Father First Name"
          variant="outlined"
          value={values.fatherfirstName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="fatherfirstName"
          errorMessage={errorMsg(errors, touched, "fatherfirstName")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Father Middle Name"
          variant="outlined"
          value={values.fathermiddleName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="fathermiddleName"
          errorMessage={errorMsg(errors, touched, "fathermiddleName")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Father Last Name"
          variant="outlined"
          value={values.fatherlastName}
          onBlur={handleBlur}
          onChange={handleChange}
          name="fatherlastName"
          errorMessage={errorMsg(errors, touched, "fatherlastName")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Mother First Name"
          variant="outlined"
          value={values.motherfirstName}
          onBlur={handleBlur}
          onChange={handleChange}
          name="motherfirstName"
          errorMessage={errorMsg(errors, touched, "motherfirstName")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Mother Middle Name"
          variant="outlined"
          value={values.mothermiddleName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="mothermiddleName"
          errorMessage={errorMsg(errors, touched, "mothermiddleName")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Mother Last Name"
          variant="outlined"
          value={values.motherlastName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="motherlastName"
          errorMessage={errorMsg(errors, touched, "motherlastName")}
        />
      </Grid>
    
    </Grid>
  );
};

export default EmployeeFamilyDetails