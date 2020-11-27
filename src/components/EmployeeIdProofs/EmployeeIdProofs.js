import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Grid, Paper, Typography, AccordionDetails } from "@material-ui/core";

import { TextBox } from "../../controls/TextBox";
import { Button } from "../../controls/Button";
//import Typography from '@material-ui/core/Typography';

//import { errorMsg } from "./EmployeePersonalInformation.utils";
import { IncutContext } from "../../context/IncutContext";
import { EmployeeOnBoard } from "../EmployeeOnBoard";
import { BasicDropZoneAttachments } from "../../controls/DropAttachments";
import IdProofsDisplay from "./IdProofsDisplay";
import {
  postFormDataService,
  uploadMultipleAttachmentService,
  postFormDataFireStoreService
} from "../../services";

const EmployeeIdProofs = ({ setTab }) => {
  const [dataSaved, setDataSaved] = useState(false);
  const [filesAttached, setFilesAttached] = useState([]);
  const { formData } = useContext(IncutContext);

  const onDrop = (acceptedFiles) => {
    setFilesAttached((prevValue) => [...prevValue, ...acceptedFiles]);
  };

  const formik = useFormik({
    initialValues: {
      panNo: "PAN123456",
      aadharNo: "AANO123456",
      passportNo: "PPNO123456",
    },
    onSubmit: async (values, { setSubmitting }) => {
      formData.identityValues = { ...values };
      //call postFormDataService only after uploadMultipleAttachmentService
      return uploadMultipleAttachmentService(filesAttached, formData).then(
        async (updatedFormData) => {
          console.log({updatedFormData})
         // const response = await postFormDataService(updatedFormData);
          const response = await postFormDataFireStoreService(updatedFormData)
          console.log({ response });
          setDataSaved(true);
          setSubmitting(false);
          setTab(4)
        }
      );
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
    isSubmitting,
  } = formik;

  if (isSubmitting) {
    return <h3>On Hold.....</h3>;
  }

  if (dataSaved) {
    return <EmployeeOnBoard formData={formData} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: "95%", margin: "auto" }}>
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
              <BasicDropZoneAttachments
                noDrop={false}
                multiple={true}
                onDrop={onDrop}
                filesAttached={filesAttached}
              />
              <aside>
                <IdProofsDisplay
                  files={filesAttached}
                  setFilesAttached={setFilesAttached}
                  formData={formData}
                  dataSaved={dataSaved}
                />
              </aside>
            </Grid>

            <Grid item md={12}>
              <Button onClick={() => handleSubmit()} text="Submit" />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </form>
  );
};

export default EmployeeIdProofs;
