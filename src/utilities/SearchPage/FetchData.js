import { useEffect } from 'react';
import axios from 'axios';

const FetchData = ({ term, setSearchResults }) => {
  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BOOKS_API, {
          params: {
            q: term,
          },
        });

        setSearchResults(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const debounceSearch = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1200);

    return () => {
      clearTimeout(debounceSearch);
    };

  }, [term, setSearchResults]);
};

export default FetchData;
