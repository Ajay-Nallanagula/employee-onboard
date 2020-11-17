import React, { useState } from "react";
import { Button } from "../Button";
import { DropzoneDialog } from "material-ui-dropzone";

//https://yuvaleros.github.io/material-ui-dropzone/

const DropAttachments = (props) => {
  const { setOpen, open, onSave } = props;
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Image
      </Button>

      <DropzoneDialog
        cancelButtonText={"cancel"}
        open={open}
        onClose={() => setOpen(false)}
        onSave={onSave}
        showPreviews={false}
        showFileNamesInPreview={true}
        {...props}
      />
    </div>
  );
};

export default DropAttachments;
