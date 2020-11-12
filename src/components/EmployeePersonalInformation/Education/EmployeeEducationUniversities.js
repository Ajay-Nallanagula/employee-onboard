import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const EmployeeEducationUniversities = ({ formik }) => {
  const {
    eduSchool,
    eduGradCollege,
    eduPostGradCollege,
    eduDiplomaCollege,
  } = formik.values;

  const state = {
    eduSchool,
    eduGradCollege,
    eduPostGradCollege,
    eduDiplomaCollege,
  };

  return (
    
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">School/College</TableCell>
            <TableCell align="right">Passout Year</TableCell>
            <TableCell align="right">Percentage</TableCell>
            <TableCell align="right">Medium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(state).map((key) => {
            const row = state[key];
            return (
              <TableRow key={row.level}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.eduSchoolName}</TableCell>
                <TableCell align="right">{row.eduPassOutYear}</TableCell>
                <TableCell align="right">{row.eduPercentage}</TableCell>
                <TableCell align="right">{row.eduMedium}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    
  );
};

export default EmployeeEducationUniversities;
