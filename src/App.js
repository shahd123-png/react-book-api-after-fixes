// App.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./App.css";
import theme from "./assets/themes/theme";
import RouterRoutes from "./router/RouterRoutes";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <RouterRoutes/> 
    </ThemeProvider>
  );
}

export default App;
