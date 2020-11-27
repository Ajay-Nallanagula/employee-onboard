import { database, firestore } from "../firebase/firebase";

//uuid regex /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

const getEmpBioDataDBRef = (custId) => {
  return database.ref(`incut-employee-onboard/${custId}`);
};

//retrieve from realtime db c/o firebase
export const getEmployeeDetails = async (empCustId) => {
  //empcustId should be in format firstname_lastname_uuid  eg:Ajay_Nallanagula_uuid
  const empBioDataDbRef = getEmpBioDataDBRef(empCustId);
  const resp = await empBioDataDbRef.once("value", (snap) => snap.val());
  return resp;
};

//retrieve from firestore c/o firebase
export const getEmployeeDetailsFirestore = async (empCustId) => {
  const empBioDataFsRef = firestore.collection("employees");
  const snapshot = await empBioDataFsRef.doc(empCustId).get(); 
  return snapshot.data();
};
