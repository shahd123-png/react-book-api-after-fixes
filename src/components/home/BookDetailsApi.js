import React from "react";
import PropTypes from "prop-types";
import { Typography, Box ,Stack} from "@mui/material";

const TypographyDescription = {
  maxWidth: "39rem"
}
const BookDetailsApi = ({ title, description }) => {
  return (
    <Box>
      <Stack spacing={3} justifyContent={"flex-start"} alignItems={"flex-start"}>
        <Typography variant="h1">{title}</Typography>
        <Typography style={TypographyDescription} variant="subtitle1">{description}</Typography>
      </Stack>
    </Box>
  );
};

BookDetailsApi.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BookDetailsApi;
