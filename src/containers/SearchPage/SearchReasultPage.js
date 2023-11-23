import React, { useState, useEffect } from 'react';
import SearchResultsLists from '../../components/search/SearchResultsList';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('term');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BOOKS_API, {
          params: {
            q: debouncedSearchTerm,
          },
        });

        setResults(response?.data?.items);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (debouncedSearchTerm) {
      fetchData();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1200);

    return () => {
      clearTimeout(debounceSearch);
    };
  }, [searchTerm]);

  return <SearchResultsLists results={results} />;
};

export default SearchResultsPage;
