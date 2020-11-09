import { string, object } from "yup";

const EmployeePersonalInformationSchema = object().shape({
  firstName: string()
    .min(2, "First name length is minimum 2 !")
    .max(50, "First name length is maximum 50 !")
    .required("First name is Required"),
  middleName: string()
    .min(2, "Middle name length is minimum 2 !")
    .max(50, "Middle name length is maximum 50 !")
    .required("Middle name is Required"),
  lastName: string()
    .min(2, "Last name length is minimum 2 !")
    .max(50, "Last name length is maximum 50 !")
    .required("Last name is Required"),

  email: string().email("Invalid email").required("Email is Required"),

  fatherfirstName: string()
    .min(2, "Father first name length is minimum 2 !")
    .max(50, "Father first name length is maximum 50 !"),
  fathermiddleName: string()
    .min(2, "Father middle name length is minimum 2 !")
    .max(50, "Father middle name length is maximum 50 !"),
  fatherlastName: string()
    .min(2, "Father last name length is minimum 2 !")
    .max(50, "Father last name length is maximum 50 !"),

  motherfirstName: string()
    .min(2, "Mother first name length is minimum 2 !")
    .max(50, "Mother first name length is maximum 50 !"),
  mothermiddleName: string()
    .min(2, "Mother middle name length is minimum 2 !")
    .max(50, "Mother middle name length is maximum 50 !"),
  motherlastName: string()
    .min(2, "Mother last name length is minimum 2 !")
    .max(50, "Mother last name length is maximum 50 !"),

    dob:string()
        .required('Date is required')
});

export default EmployeePersonalInformationSchema;
