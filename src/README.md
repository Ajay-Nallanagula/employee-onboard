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