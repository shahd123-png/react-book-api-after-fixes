import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const iconSize = {
  width: '3rem',
  height: '3rem'
};

const SeconedSection = ({ icon, text }) => {
  return (
    <Fragment>
    {React.cloneElement(icon, { style: iconSize })}
      <Typography color="customColor.black" variant="h4">{text}</Typography>
    </Fragment>
  );
};

SeconedSection.propTypes = {
  icon: PropTypes.node.isRequired, 
  text: PropTypes.string.isRequired,
};
export default SeconedSection;
