// App.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./App.css";
import theme from "./assets/themes/theme";
import SwiperComponent from "./components/common/swiper/SwiperComponent";
import RouterRoutes from "./router/RouterRoutes";
import SearchPage from "./containers/SearchPage/SearchPage";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <RouterRoutes/> 
    </ThemeProvider>
  );
}

export default App;
