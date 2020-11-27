import React from "react";
import Title from "../Title";
import { Typography, Chip } from "@material-ui/core";
import IdDisplayChip from "./IdDisplayChip";

const IdProofsDisplay = ({ files,setFilesAttached,formData,dataSaved }) => {
  if (!files?.length) {
    return null;
  }
  return (
    <div style={{ paddingTop: "15px" }}>
      <Title variant="body1" textAlign="left">
        Files Uploded
      </Title>
      <IdDisplayChip chipData={files} setChipData={setFilesAttached} formData={formData} dataSaved={dataSaved}/>
    </div>
  );
};

export default IdProofsDisplay;
