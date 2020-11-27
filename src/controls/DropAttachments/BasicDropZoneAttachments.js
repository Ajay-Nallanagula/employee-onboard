import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

//https://react-dropzone.js.org/#src

const BasicDropZoneAttachments = ({ noDrag, multiple, onDrop}) => {

  const {  getRootProps, getInputProps } = useDropzone({
    noDrag,
    multiple,
    onDrop,
  });

  const obj = { ...getRootProps({ className: "dropZone" }) };

  return (
    <section className="container">
      <div {...obj}>
        <input {...getInputProps()} />
        <p>Drag or Click to select files</p>
      </div>
    </section>
  );
};

export default BasicDropZoneAttachments;
