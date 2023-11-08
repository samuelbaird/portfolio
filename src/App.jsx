import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.scss';
import CustomAppBar from './components/AppBar/AppBar';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Parallax from './components/parallax/Parallax';

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
        <div className="section" type="portfolio">
          <Parallax type="portfolio"/>
        </div>
        <Portfolio />
      </div>
      <div id="Skills">
        <div className="section">
          <Parallax type="skills" />
        </div>
        <div className="section">
        <Skills />
        </div>
      </div>
      <div className="section" id="Contact">
        <Contact />
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