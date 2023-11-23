import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(147, 125, 194, 1)",
    },
    secondary: {
      main: "rgba(147, 125, 194, 0.6)",
    },
    customColor: {
      main: "rgba(198, 137, 198, 1)",
      black: "#000000",
    },

    white: {
      main: "#FFFFFF",
    },

    grey : {
      main :'rgb(158, 158, 158)',
    },
  },
    typography: {
      h1: {
        fontFamily: 'Inter',
        fontSize: 48,
        fontWeight: 700
      },
      p: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 400
      },
      h2: {
        fontFamily: 'Inter',
        fontSize: '38px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '49px'
      },
  
      h3: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 600
      },
  
      h4: {
        fontFamily: 'Inter',
        fontSize: 22,
        fontWeight: 550
      }
      ,
      h5: {
        fontSize: '18px',
        fontS: 'normal',
        fontWeight: '400'
      }  
  },
});

export default theme;
