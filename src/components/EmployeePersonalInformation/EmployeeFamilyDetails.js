import React from "react";
import { Grid } from "@material-ui/core";
import { TextBox } from "../../controls/TextBox";
import { errorMsg } from "./EmployeePersonalInformation.utils";

const EmployeeFamilyDetails = ({ values, handleChange, errors, touched }) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Father First Name"
          variant="outlined"
          value={values.fatherfirstName}
          onChange={handleChange}
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
          name="motherlastName"
          errorMessage={errorMsg(errors, touched, "motherlastName")}
        />
      </Grid>
    
    </Grid>
  );
};

export default EmployeeFamilyDetails