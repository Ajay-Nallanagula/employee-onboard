import {database,firestore} from "../firebase/firebase";

const getEmpBioDataDBRef = (custId) => {
  return database.ref(`incut-employee-onboard/${custId}`);
};

//data will save in real time database
export const postFormDataService = async (formData) => {
  const {firstName,lastName} = formData.employeePersonalInfomation
  const custId= `${firstName}_${lastName}_${formData.empcustomId}`
  const empBioDataDbRef = getEmpBioDataDBRef(custId);
  const resp = await empBioDataDbRef.set({ ...formData });
  console.log(resp);
  return resp;
};


//data will save in cloud firestore
export const postFormDataFireStoreService = async (formData)=>{
  const {firstName,lastName} = formData.employeePersonalInfomation
  const custId= `${firstName}_${lastName}_${formData.empcustomId}`
  const fsEmployeesref = firestore.collection('employees')
  return fsEmployeesref.doc(custId).set({...formData})
  .then((resp)=>{
   // console.log("Document written with ID: ", resp.id);
    return resp
  })
  .catch((error)=>console.log(error))

}
