import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../containers/Home/HomePage";
import BookDetailsPage from "../containers/BookDetails/BookDetailsPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Seconed-Page/:bookId" element={<BookDetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
