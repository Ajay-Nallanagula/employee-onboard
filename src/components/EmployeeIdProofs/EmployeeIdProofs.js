import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Grid, Paper, Typography, AccordionDetails } from "@material-ui/core";
import EmployeeInfoDisplay from "../EmployeeInfoDisplay";
import { TextBox } from "../../controls/TextBox";
import { Button } from "../../controls/Button";
//import Typography from '@material-ui/core/Typography';
import Title from "../Title";
//import { errorMsg } from "./EmployeePersonalInformation.utils";
import { IncutContext } from "../../context/IncutContext";
import { DropzoneArea } from "material-ui-dropzone";
import {
  DropAttachments,
  BasicDropZoneAttachments,
} from "../../controls/DropAttachments";
import IdProofsDisplay from './IdProofsDisplay'

const EmployeeIdProofs = ({ setTab }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [filesAttached,setFilesAttached] = useState([])
  const { formData } = useContext(IncutContext);

   const onDrop = (acceptedFiles) => {
    setFilesAttached((prevValue) => {
      console.log({ prevValue });
      console.log({ acceptedFiles });
      const arr = [...prevValue, ...acceptedFiles];
      return arr;
    });
  }

  const formik = useFormik({
    initialValues: {
      panNo: "",
      aadharNo: "",
      passportNo: "",
    },
    onSubmit: (values) => {
      setIsSubmit(true);
      setTab((val) => (val === 4 ? 1 : 4));
      formData.employeePersonalInfomation = { ...values };
    },
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    setFieldValue,
    handleBlur,
  } = formik;
  return (
    <div style={{width:'95%',margin:'auto'}}>
      <Paper>
        <Grid container spacing={3}>
          <Grid item md={3} xs={4}>
            <TextBox
              required
              id="outlined-required"
              label="PAN Number"
              variant="outlined"
              value={values.panNo}
              onChange={handleChange}
              onBlur={handleBlur}
              name="panNo"
              //errorMessage={errorMsg(errors, touched, "firstName")}
            />
          </Grid>
          <Grid item md={3} xs={4}>
            <TextBox
              required
              id="outlined-required"
              label="Aadhar Number"
              variant="outlined"
              value={values.aadharNo}
              onChange={handleChange}
              onBlur={handleBlur}
              name="aadharNo"
              //errorMessage={errorMsg(errors, touched, "aadharNo")}
            />
          </Grid>

          <Grid item md={3} xs={4}>
            <TextBox
              required
              id="outlined-required"
              label="Passport Number"
              variant="outlined"
              value={values.passportNo}
              onChange={handleChange}
              onBlur={handleBlur}
              name="passportNo"
              //errorMessage={errorMsg(errors, touched, "passportNo")}
            />
          </Grid>
          <Grid item md={10}>
            <BasicDropZoneAttachments noDrop={true} multiple={true} onDrop={onDrop} filesAttached={filesAttached}/>
            <aside>
               <IdProofsDisplay files={filesAttached}/>
            </aside>
          </Grid>
        </Grid>
      </Paper>
      </div>
    
  );
};

export default EmployeeIdProofs;


