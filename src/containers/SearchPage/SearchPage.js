import React, { useState, useEffect, Fragment } from 'react';
import { TextField, Stack, Hidden } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import SearchResultsLists from '../../components/search/SearchResultsList';
import style from '../../components/common/Header/Header.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


const SearchPage = ({ onSearchResult }) => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate(); 


  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BOOKS_API, {
          params: {
            q: term,
          },
        });

        setResult(response.data.items);
        onSearchResult(response.data.items);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    const debounceSearch = setTimeout(() => {
      if (term) {
        search();
        navigate('/search-results');
      }
    }, 1200);

    return () => {
      clearTimeout(debounceSearch);
    };
  }, [term, onSearchResult, navigate]);

  return (
     
      <SearchResultsLists results={result} />
  );
};

export default SearchPage;
