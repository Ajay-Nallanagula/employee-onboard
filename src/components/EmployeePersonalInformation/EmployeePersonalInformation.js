import React, { useState ,useContext} from "react";
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
import moment from "moment";
import EmployeeContactDetails from './EmployeeContactDetails'
import {IncutContext} from '../../context/IncutContext'



const EmployeePersonalInformation = ({setTab}) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const {formData} = useContext(IncutContext)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      motherfirstName: "",
      fatherfirstName: "",
      nationality: "",
      dob: null,
      addrDoorNo:'',
      addrLine1:'',
      addrLine2:'',
      addrCityMandal:'',
      addrState:'',
      addrPincode:'',
      addrPermDoorNo:'',
      addrPermLine1:'',
      addrPermLine2:'',
      addrPermCityMandal:'',
      addrPermState:'',
      addrPermPincode:'',
      checkedPermAddress:false,
      mobileNumber:'',
      alternateNumber:'',
      // underGrad:{eduUnderGrad:false,eduInstituteName:'',},
      // grad:{eduGrad:false,eduInstituteName:''},
      // diploma:{eduDiploma:false,eduInstituteName:''},
      // postGrad:{eduPostGrad:'',eduInstituteName:''}
    },
    validationSchema: EmployeePersonalInformationSchema,
    onSubmit: (values) => {
      setIsSubmit(true);
      setTab((val)=> val===4 ? 1:2)
      formData.employeePersonalInfomation = {...values}
    },
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    setFieldValue,
    handleBlur
  } = formik;
  //const classes= useStyles()
  const maxDate = new Date(
    moment("01/01/2020", "DD/MM/YYYY")
      .subtract(19, "years")
      .format("DD/MM/YYYY")
  );
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    name="email"
                    errorMessage={errorMsg(errors, touched, "email")}
                  />
                </Grid>
                  <Grid item md={4} xs={4}>
                    <DatePicker
                      required
                      selected={values.dob}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      name="dob"
                      onChange={(date) => setFieldValue("dob", date)}
                      placeholderText="DOB, dd/MM/yyyy"
                      customInput={
                        <TextBox id="outlined-required" variant="outlined" />
                      }
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      maxDate={maxDate}
                      portalId="root-portal"
                      withPortal
                    />
                  </Grid>
                <Grid item md={4} xs={4}>
                  <TextBox
                    id="outlined-required"
                    label="Nationality"
                    variant="outlined"
                    value={values.nationality}
                    onChange={handleChange}
                    name="nationality"
                    onBlur={handleBlur}
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
              <Title variant="body1">Employee Personal Details</Title>
            </AccordionSummary>
            <AccordionDetails>
              <EmployeeFamilyDetails formik={formik}/>
            </AccordionDetails>
          </Accordion>
          <EmployeeContactDetails formik={formik}/>

        </div>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button onClick={() => handleSubmit()} text="Next"/>
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
