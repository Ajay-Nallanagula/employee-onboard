import React, { useState } from "react";
import { useFormik } from "formik";
import { Grid, Paper, Typography } from "@material-ui/core";
import EmployeeInfoDisplay from "../EmployeeInfoDisplay";
import { TextBox } from "../../controls/TextBox";
import { Button } from "../../controls/Button";
import EmployeePersonalInformationSchema from "./EmployeePersonalInformation.schema";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
//import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { DateField } from "../../controls/DateField";
import Title from "../Title";
import { errorMsg } from "./EmployeePersonalInformation.utils";
import EmployeeFamilyDetails from "./EmployeeFamilyDetails";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker-style.css";
import  moment from 'moment'

const EmployeePersonalInformation = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      dob: "",
      motherfirstName: "",
      fatherfirstName: "",
      nationality: "",
      dob: null,
    },
    validationSchema: EmployeePersonalInformationSchema,
    onSubmit: (values) => {
      setIsSubmit(true);
    },
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    setFieldValue,
  } = formik;
  //const classes= useStyles()
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <div style={{ paddingBottom: "10px" }}>
          <Accordion style={{ padding: "10px" }} defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Title variant="body1">Employee Details</Title>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item md={4} xs={4}>
                  <TextBox
                    required
                    id="outlined-required"
                    label="First Name"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    name="firstName"
                    errorMessage={errorMsg(errors, touched, "firstName")}
                  />
                </Grid>
                <Grid item md={4} xs={4}>
                  <TextBox
                    required
                    id="outlined-required"
                    label="Middle Name"
                    variant="outlined"
                    value={values.middleName}
                    onChange={handleChange}
                    name="middleName"
                    errorMessage={errorMsg(errors, touched, "middleName")}
                  />
                </Grid>
                <Grid item md={4} xs={4}>
                  <TextBox
                    required
                    id="outlined-required"
                    label="Last Name"
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleChange}
                    name="lastName"
                    errorMessage={errorMsg(errors, touched, "lastName")}
                  />
                </Grid>
                <Grid item md={4} xs={4}>
                  <TextBox
                    required
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    errorMessage={errorMsg(errors, touched, "email")}
                  />
                </Grid>
                {
                  <Grid item md={4} xs={4}>
                    <DatePicker
                      required
                      selected={values.dob}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      name="dob"
                      showYearDropdown
                      scrollableYearDropdown
                      onChange={(date) => setFieldValue("dob", date)}
                      placeholderText="DOB, dd/MM/yyyy"
                      customInput={
                        <TextBox id="outlined-required" variant="outlined" />
                      }
                      maxDate={new Date(moment(new Date()).subtract(20, 'years').format('DD/MM/YYYY'))}
                    />
                  </Grid>
                }
                <Grid item md={4} xs={4}>
                  <TextBox
                    id="outlined-required"
                    label="Nationality"
                    variant="outlined"
                    value={values.nationality}
                    onChange={handleChange}
                    name="nationality"
                    errorMessage={errorMsg(errors, touched, "nationality")}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ padding: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Title variant="body1">Employee Family Details</Title>
            </AccordionSummary>
            <AccordionDetails>
              <EmployeeFamilyDetails
                values={values}
                handleChange={handleChange}
                errors={errors}
                touched={touched}
              />
            </AccordionDetails>
          </Accordion>
        </div>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button onClick={() => handleSubmit()} />
        </Grid>
      </form>
      {isSubmit && (
        <div>
          <EmployeeInfoDisplay values={values} />
        </div>
      )}
    </Paper>
  );
};

export default EmployeePersonalInformation;
