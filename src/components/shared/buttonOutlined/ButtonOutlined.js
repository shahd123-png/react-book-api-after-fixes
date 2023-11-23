import React from 'react'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const ButtonOutline = styled(Button)(({ customWidth,padding }) => ({
  textTransform: 'none',
  width: customWidth || 'auto',
  padding: padding || 'auto',
}));

const ButtonOutlined = ({ children, customWidth, padding}) => {
  return <ButtonOutline  variant="outlined" padding = {padding} customWidth={customWidth}>{children}</ButtonOutline>;
};

ButtonOutlined.propTypes = {
  children: PropTypes.node.isRequired,
  customWidth: PropTypes.string,
};

export default ButtonOutlined
