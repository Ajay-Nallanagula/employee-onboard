import {
    Grid,
  } from "@material-ui/core";
  import { TextBox } from "../../controls/TextBox";
  import React from 'react'
  import { errorMsg } from "./EmployeePersonalInformation.utils";

const EmployeeContactPhone = ({formik}) => {
    const { values, handleChange, errors, touched,handleBlur} = formik;
  return (
    <Grid container direction="row" spacing = {3} style={{margin: '0px'}}>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Mobile Number"
          variant="outlined"
          value={values.mobileNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          name="mobileNumber"
          errorMessage={errorMsg(errors, touched, "mobileNumber")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Alternate Number"
          variant="outlined"
          value={values.alternateNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          name="alternateNumber"
          errorMessage={errorMsg(errors, touched, "alternateNumber")}
        />
      </Grid>
    </Grid>
  );
};

export default EmployeeContactPhone