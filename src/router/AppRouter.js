import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../containers/Home/HomePage";
import BookDetailsPage from "../containers/BookDetails/BookDetailsPage";
import SearchResultsPage from "../containers/SearchPage/SearchReasultPage";
import SearchPage from "../containers/SearchPage/SearchPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Seconed-Page/:bookId" element={<BookDetailsPage />} />
      <Route path="/search-results" element={<SearchResultsPage />} />
    </Routes>
  );
};

export default AppRouter;
