import React from "react";
import { Typography } from "@material-ui/core";

const Label = ({ keyField, value }) => {
  const newKey = keyField.charAt(0).toUpperCase() + keyField.slice(1);
  return (
    <Typography variant="subtitle2" gutterBottom>
      {newKey}
      <span>
        <b> :{value}</b>
      </span>
    </Typography>
  );
};

export default Label;
