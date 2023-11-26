import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const ExtraDetails = ({ label, content })=> {
  return (
    <Typography variant= 'h5'>
      <span style={{ color: 'rgba(198, 137, 198, 0.70)' }}>{label} : </span>{content}</Typography>
  );
};

ExtraDetails.propTypes = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
export default ExtraDetails;
