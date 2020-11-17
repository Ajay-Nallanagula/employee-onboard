import React ,{useContext} from 'react'
import EmployeeSchoolEducation from "./EmployeeSchoolEducation";
import EmployeeGradEducation from "./EmployeeGradEducation";
import EmployeeDiplomaEducation from "./EmployeeDiplomaEducation";
import EmployeePgEducation from "./EmployeePgEducation";
import { Paper, Divider ,Grid} from "@material-ui/core";
import {Button} from '../../controls/Button'
import {IncutContext} from '../../context/IncutContext'

const EmployeeEducation = ({setTab}) => {
  let education = {};
  const {formData} = useContext(IncutContext)
  const onUpdate = (values, propName) => {
    education = { ...education, [propName]: { ...values } };
    //setTab((val)=> val===4 ? 1:3)
    formData.employeeEducationalInfomation = {...education}
  };
  return (
    <Paper>
      <EmployeeSchoolEducation onUpdate={onUpdate} educationData={education} />
      <Divider style={{paddingTop:'1px'}}/>
      <EmployeeDiplomaEducation onUpdate={onUpdate} />
      <Divider style={{paddingTop:'1px'}}/>
      <EmployeeGradEducation onUpdate={onUpdate} />
      <Divider style={{paddingTop:'1px'}}/>
      <EmployeePgEducation onUpdate={onUpdate} />
      <Divider style={{paddingTop:'1px'}}/>
      <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button onClick={() => setTab((val)=> val===4 ? 1:3)} text="Next"/>
        </Grid>
    </Paper>
  );
};

export default EmployeeEducation;
