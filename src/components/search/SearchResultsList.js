import React from 'react';
import { Box, Typography ,Stack, Grid} from '@mui/material';
import ImagesComponent from '../../assets/images/ImagesComponent/ImagesComponent'; // Update this path

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
  return (
    <Box style={BoxSearchResult} >
      {results.map((result, index) => {
        const {
          volumeInfo: {
            title,
            authors,
            publisher,
            imageLinks: { thumbnail } = ImagesComponent.bookCarouselCardPic,
          } = {},
        } = result;

        const authorApi = authors ? authors[0] : 'Author not found';
        const publisherApi = publisher || 'Publisher not found';

        return (
          <Stack direction={'row'} spacing={3} key={index} >
            <img style={imgSize} src={thumbnail} alt={title} />
            <Stack spacing={"2rem"}>
              <Typography variant="h4">{title}</Typography>
              <Typography>Author: {authorApi}</Typography>
              <Typography>Publisher:{publisherApi}</Typography>
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};

export default SearchResultsLists;
