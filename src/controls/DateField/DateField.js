import React, { Fragment, useState } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "moment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns';

const hasErrors = (errorMessage) => {
  return errorMessage?.length ? errorMessage : "";
};

const DateField = (props = {}) => {
  const {
    required,
    disabled,
    errorMessage,
    format,
    noFormat,
    mask,
    disableFuture,
    handleChange,
    ...restProps
  } = props;
  const error = hasErrors(errorMessage);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
      <KeyboardDatePicker
          format={!noFormat ? format : undefined}
          mask={mask ? mask : '__/__/____'}
          {...restProps}
          disabled={disabled}
          required={required}
          error={error}
          disableFuture
          onChange={handleChange}
        />
      </Grid>
      <Grid item style={{ margin: "8px 12px 0" }}>
        <FormHelperText disabled={disabled} required={required} error={error}>
          {error && errorMessage}
        </FormHelperText>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

DateField.propTypes = {
  autoOk: PropTypes.bool,
  fullWidth: PropTypes.bool,
  format: PropTypes.string,
  inputVariant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  label: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(['dialog', 'inline'])
}

DateField.defaultProps = {
  autoOk: true,
  fullWidth: true,
  format: 'DD/MM/YYYY',
  inputVariant: 'outlined',
  label: 'Date Picker',
  required: false,
  variant: 'inline'
}

export default DateField;
