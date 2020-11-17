DatePicker : https://medium.com/wesionary-team/using-material-datepicker-in-react-98685e272149

 <DatePicker
                      selected={values.dob}
                      dateFormat="dd/MM/yyyy" 
                      className="form-control"
                      name="dob"
                      showYearDropdown
                      scrollableYearDropdown
                      disableFutureDate
                      onChange={(date) => setFieldValue("dob", date)}
                      placeholderText="DOB, dd/MM/yyyy"
                    />

                    {/* <Grid container>
  {/* <DropzoneArea onChange={(files) => console.log("Files:", files)} filesLimit={6}/> */}
  {/* <DropAttachments
    submitButtonText={"Update"}
    onSave={handleDropAttachments}
    open={attachmentOpen}
    setOpen={setAttachmentOpen}
  /> */}
  {/* <BasicDropZoneAttachments noDrop={true} multiple={true}/> */}
</Grid> */}