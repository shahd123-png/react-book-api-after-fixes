import React from "react";
import PropTypes from "prop-types";
import { Typography, Box ,Stack} from "@mui/material";


const TypographyDescription = {
    maxWidth: "544px"
  }

const SeconedPageBookDetails =({ title, author,description }) => {
  return (
    <Box>
      <Stack gap={'2rem'}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant='h5'>{author}</Typography>
        <Typography variant='h4'>12.40$</Typography>
        <Typography dangerouslySetInnerHTML={{ __html: description }} style={TypographyDescription} variant="subtitle1"></Typography>
      </Stack>
    </Box>
  );
};

SeconedPageBookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default SeconedPageBookDetails;
