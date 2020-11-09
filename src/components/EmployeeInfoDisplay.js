import React from "react";
const EmployeeInfoDisplay = ({ values }) => {
  console.log({ values });
  const { firstName, lastName, email } = values;
  return (
    <>
      <div>FirstName: {firstName}</div>
      <div>LastName: {lastName}</div>
      <div>Email: {email}</div>
    </>
  );
};

export default EmployeeInfoDisplay;
