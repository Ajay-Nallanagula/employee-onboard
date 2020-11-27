
import { Button } from "../../controls/Button";
import { Grid } from "@material-ui/core";
import { getEmployeeDetailsFirestore} from "../../services";
import React,{useCallback,useState} from "react";

const WelcomeOnboard = ({empCustId,setState})=>{
// const [empDetails,setEmpDetails] = useState({})
// useEffect(async ()=>{
//   const readOnlyFormData = await getEmployeeDetailsFirestore(empCustId);
// })

const getEmpDetails = useCallback(async ()=>{
  const readOnlyFormData = await getEmployeeDetailsFirestore(empCustId);
  setState(readOnlyFormData);
},[empCustId])
  
  return (
    <>
      <h1> Welcome to Incut!!! </h1>
      <div>
        <Grid item md={12}>
          <Button
            onClick={getEmpDetails}
            text="Get Data"
          />
        </Grid>
      </div>
    </>
)}

export default WelcomeOnboard