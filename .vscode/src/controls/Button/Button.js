import { Button as MButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export const Button = (props) => {
  const { text, hide, ...restProps } = props
  if (hide) {
    return null
  }
  return (
    <MButton data-test='button' {...restProps}>
      {props.children} {text}
    </MButton>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  onClick: PropTypes.func,
  text: PropTypes.string,
  hide: PropTypes.bool
}

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  text: 'Submit',
  hide: false
}

export default Button