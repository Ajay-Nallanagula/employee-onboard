import React from "react";
import { Grid, Divider} from "@material-ui/core";
import { useFormik } from "formik";
import { TextBox } from '../../controls/TextBox'
import { Button } from "../../controls/Button";

const EducationDetailForm = ({ show, onUpdate ,objKey}) => {
    const initObj = {
        eduSchoolName: "",
        eduPassoutYear: "",
        percentage: "",
        medium: "",
        objKey
      }
  const formik = useFormik({
    initialValues:initObj ,
    enableReinitialize: true,
    onSubmit: (values) => {
      const {objKey,...restValues} = values
      onUpdate(restValues, objKey);
    },
  });
  const { handleSubmit, handleChange, values, handleBlur } = formik;

  if (!show) {
    return null;
  }

  return (
    <form submit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item>
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
        <Grid item>
          <TextBox
            id="outlined-required"
            value={values.eduPassoutYear}
            label="Pass Out Year"
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            name="eduPassoutYear"
          />
        </Grid>
        <Grid item>
          <TextBox
            id="outlined-required"
            value={values.percentage}
            label="Percentage"
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            name="percentage"
          />
        </Grid>
        <Grid item>
          <TextBox
            id="outlined-required"
            value={values.medium}
            label="Medium"
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            name="medium"
          />
        </Grid>
        <Grid container
          direction="row"
          justify="flex-end"
          alignItems="flex-end" style={{paddingBottom:'6px'}}>
          <Button color="primary" onClick={handleSubmit} text='Update' size='small' style={{padding: '2px 3px',fontSize: '11px'}}/>
        </Grid>
      </Grid>
    </form>
  );
};

export default EducationDetailForm;
