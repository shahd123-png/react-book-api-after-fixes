import React from 'react';
import { Box, Typography ,Stack} from '@mui/material';
import ImagesComponent from '../../assets/images/ImagesComponent/ImagesComponent';

const BoxSearchResult = {
  display: 'grid',
  padding: '1rem 5rem',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'start',
  gap: '5rem',
};

const imgSize = {
  height: '22rem',
  width: '15rem',
};

  const SearchResultsLists = ({ results }) => {
    if (!results || results.length === 0) {
      return <Typography variant="h6">No results found.</Typography>;
    }
  
    return (
      <Box style={BoxSearchResult}>
        {results.map((result) => {
          const {
            title,
            authors,
            publisher,
            imageLinks,
          } = result?.volumeInfo || {};
  
          const titleBookApi = title?.toString() || "not found";
          const imgApi = imageLinks?.smallThumbnail || ImagesComponent.GallarySeconedPageImage1;
          const authorApi = (authors?.length || 0) > 0 ? authors[0] : "Unknown Author";
          const publisherApi = publisher?.toString() || "Not Found";
  
          return (
            <Stack direction={'row'} spacing={3} key={result.id}>
              <img style={imgSize} src={imgApi} alt={title} />
              <Stack spacing={"2rem"}>
                <Typography variant="h4">{titleBookApi}</Typography>
                <Typography>Author: {authorApi}</Typography>
                <Typography>Publisher: {publisherApi}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Box>
    );
  };
  
  export default SearchResultsLists;
  
