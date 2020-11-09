import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import React from 'react'

export const TextBox = (props) => {
  const { errorMessage, inputLabelShrink, disabled, ...restProps } = props
  return (
    <TextField
      disabled={disabled}
      error={!!errorMessage}
      helperText={errorMessage}
      autoComplete='disabled'
      size='small'
      {...restProps}
    />
  )
}

TextBox.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  inputLabelShrink: PropTypes.bool
}

TextBox.defaultProps = {
  fullWidth: true,
  variant: 'outlined',
  inputLabelShrink: true
}

export default TextBox