import { Grid, Paper } from "@material-ui/core";
import React, { useState ,useContext} from "react";
import Label from "../../controls/Label";
import { formatEmployeePersonalInfomation } from "./EmployeeOnBoard.utils";
import WelcomeOnboard from "./WelcomeOnboard";
import Title from "../Title"
import {IncutContext} from "../../context/IncutContext"
import { Button } from "../../controls/Button";
import {APPROVEDSTATUS} from "../../Constants"
const EmployeeOnBoard = ({setTab}) => {
  const { formData } = useContext(IncutContext);
  const { firstName, lastName } = formData.employeePersonalInfomation;
  const empCustId = `${firstName}_${lastName}_${formData.empcustomId}`;
  //const isWelcomeBanner = formData.approvedStatus === APPROVEDSTATUS.PENDING;
  const [state, setState] = useState(null);

  if (!state) {
    return <WelcomeOnboard setState={setState} empCustId={empCustId} />;
  }

  //const { employeePersonalInfomation } = state;

  const formattedData = formatEmployeePersonalInfomation(state)

  return (
    <Paper>
      <div style={{paddingBottom:'20px'}}>
      <Title textAlign='left'>Employee Personal Information</Title>
      </div>
      <Grid container spacing={1}>
        {Object.keys(formattedData).map((keyField) =>formattedData[keyField]?.length > 0 && (
              <Grid item md={3}>
                <Label keyField={keyField.toLowerCase()} value={formattedData[keyField]} />
              </Grid>
            ))}
      </Grid>
      <Grid item md={12}>
          <Button
            onClick={() => setTab(1)}
            text="Edit Employee Information"
          />
        </Grid>
    </Paper>
  );
};

export default EmployeeOnBoard;
