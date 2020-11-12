import React from "react";
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
import { errorMsg } from "./EmployeePersonalInformation.utils";

const CurrentAddress = ({formik})=>{
const { values, handleChange, errors, touched,handleBlur} = formik;
return (
    <>
<Grid direction='row' justify="flex-start" container style={{margin: '10px'}}><Title variant="body2">Current Address</Title></Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Door/Flat/Plot"
          variant="outlined"
          value={values.addrDoorNo}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrDoorNo"
          errorMessage={errorMsg(errors, touched, "addrDoorNo")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="Address Line#1"
          variant="outlined"
          value={values.addrLine1}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrLine1"
          errorMessage={errorMsg(errors, touched, "addrLine1")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
      <TextBox
          id="outlined-required"
          label="Address Line#2"
          variant="outlined"
          value={values.addrLine2}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrLine2"
          errorMessage={errorMsg(errors, touched, "addrLine2")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          required
          id="outlined-required"
          label="City/Mandal"
          variant="outlined"
          value={values.addrCityMandal}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrCityMandal"
          errorMessage={errorMsg(errors, touched, "addrCityMandal")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          label="State"
          variant="outlined"
          value={values.addrState}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrState"
          errorMessage={errorMsg(errors, touched, "addrState")}
        />
      </Grid>
      <Grid item md={4} xs={4}>
        <TextBox
          id="outlined-required"
          required
          label="Pincode"
          variant="outlined"
          value={values.addrPincode}
          onChange={handleChange}
          onBlur={handleBlur}
          name="addrPincode"
          errorMessage={errorMsg(errors, touched, "addrPincode")}
        />
      </Grid>
      <Grid
        direction="row"
        justify="flex-start"
        container
        style={{ margin: "10px" }}
      >
        <FormControlLabel
          control={<Checkbox name="checkedPermAddress" color="primary" onChange ={handleChange} checked={values.checkedPermAddress}/>}
          label={
            <span style={{ fontSize: "12px", color: "#0b4f8c" }}>
              <i>Is Permanent Address same as current Address</i>
            </span>
          }
        />
      </Grid>
    </>
)
}

export default CurrentAddress