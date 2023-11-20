import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './AppRouter';
import HeaderComponent from '../components/common/Header/Header'
import SwiperComponent from '../components/common/swiper/SwiperComponent';
const RouterRoutes = () => {
  return (
    <Router>
    <HeaderComponent />
      <AppRouter/>
    </Router>
  )
}

export default RouterRoutes
