import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.scss';
import CustomAppBar from './components/AppBar/AppBar';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55', 
    },
    secondary: {
      main: '#D1D9E1', 
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div className="section" id="About" style={{position: 'relative'}}>
        <CustomAppBar />
        <Hero />
      </div>
      <div id="Projects">
        <Portfolio />
      </div>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Problems are inevitable. Problems are soluble. 
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}