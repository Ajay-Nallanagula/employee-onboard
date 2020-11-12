import React ,{useState}from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Title from "../Title";
import { TextBox } from "../../controls/TextBox";
import { errorMsg ,permAddressCopy} from "./EmployeePersonalInformation.utils";

const PermanentAddress = ({ formik }) => {
  formik.values =permAddressCopy(formik)
  const { values, handleChange, errors, touched ,handleBlur} = formik;
  return (
    <>
      <Grid
        direction="row"
        justify="flex-start"
        container
        style={{ margin: "10px" }}
      >
        <Title variant="body2">Permanent Address</Title>
      </Grid>
      
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Door/Flat/Plot"
          variant="outlined"
          value={values.addrPermDoorNo}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrPermDoorNo"
          errorMessage={errorMsg(errors, touched, "addrPermDoorNo")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Address Line#1"
          variant="outlined"
          value={values.addrPermLine1}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrPermLine1"
          errorMessage={errorMsg(errors, touched, "addrPermLine1")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Address Line#2"
          variant="outlined"
          value={values.addrPermLine2}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrPermLine2"
          errorMessage={errorMsg(errors, touched, "addrPermLine2")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          required
          id="outlined-required"
          label="City/Mandal"
          variant="outlined"
          value={values.addrPermCityMandal}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrPermCityMandal"
          errorMessage={errorMsg(errors, touched, "addrPermCityMandal")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="State"
          variant="outlined"
          value={values.addrPermState}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrPermState"
          errorMessage={errorMsg(errors, touched, "addrPermState")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Pincode"
          variant="outlined"
          value={values.addrPermPincode}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrPermPincode"
          errorMessage={errorMsg(errors, touched, "addrPermPincode")}
        />
      </Grid>
    </>
  );
};

export default PermanentAddress;
