import React from "react";
import Title from "../Title";

const IdProofsDisplay = ({ files }) => {
  return (
    <>
    <Title variant="body1" textAlign ='left'>Files Uploded</Title>
      {files.map((file) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ))}
    </>
  );
};

export default IdProofsDisplay
