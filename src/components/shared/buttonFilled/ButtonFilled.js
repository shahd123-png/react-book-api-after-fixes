import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ButtonFill = styled(Button)(({ customWidth,padding }) => ({

  textTransform: "none",
  fontWeight: "normal",
  padding: padding || 'auto',
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "2.003px",
  width: customWidth || 'auto',
}));

const ButtonFilled = ({ children, customWidth , padding}) => {
  return <ButtonFill variant="contained" padding = {padding} customWidth = {customWidth}>{children}</ButtonFill>;
};

ButtonFilled.propTypes = {
  children: PropTypes.node.isRequired,
  customWidth : PropTypes.string,
  padding : PropTypes.string,

};

export default ButtonFilled;
