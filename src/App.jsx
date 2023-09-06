import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [{
  title: "Uro's Journey",
  description: 'Browser based platform game.',
  image: 'https://source.unsplash.com/random?wallpapers',
  appLink: 'https://samuelbaird.github.io/Uros-Journey/',
  codeLink: 'https://github.com/samuelbaird/Uros-Journey'
},
  {
    title: 'SyncedIn',
    description: 'Job search app that matches employers and seekers based on matching skills.',
    image: 'https://source.unsplash.com/random?wallpapers',
    appLink: 'https://syncedin2-d40349e12dd2.herokuapp.com/',
    codeLink: 'https://github.com/kenneychan/SyncedIn'
  },
  {
    title: 'FitBuddy', 
    description: 'Fitness app that allows users to build and track custom workouts, plan bike and run routes, and select from a database of exercises.',
    image: 'https://source.unsplash.com/random?wallpapers',
    appLink: 'https://fitbuddy-app-b650cc5e2b80.herokuapp.com/',
    codeLink: 'https://github.com/samuelbaird/FitBuddy'
  },
  {
    title: 'PlaybookProphet',
    description: 'Statistical projection app for fantasy football players.',
    image: 'https://source.unsplash.com/random?wallpapers',
    appLink: 'https://playbookprophet-8d84a7dcc6b8.herokuapp.com/',
   }];

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55', // a deep blue shade
    },
    secondary: {
      main: '#D1D9E1', // a light gray shade
    },
  },
});


export default function Portfolio() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Samuel Baird
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" paragraph>
              I am a Full Stack Software Engineer who brings a diverse background in music, art, and entrepreneurship to the table. I offer a unique blend of creativity and technical expertise to every project. In my previous career, I developed the ability to communicate clearly, solve problems creatively, and deliver products that made an impact in people's lives. I aspire to utilize my problem-solving abilities, meticulous attention to detail, and talent for bridging the gap between artistic expression and technical precision to contribute to cutting-edge projects that are both beautiful and impactful.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="https://www.linkedin.com/in/samuelbaird/" target="_blank" rel="noopener noreferrer" underline="none">
                <Button variant="contained">LinkedIn</Button>
              </Link>
              <Link href="https://github.com/samuelbaird" target="_blank" rel="noopener noreferrer" underline="none">
                <Button variant="outlined">GitHub</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                    <CardActions>
                      <Link href={card.appLink} target="_blank" rel="noopener noreferrer" underline="none">
                        <Button size="small">See the app</Button>
                      </Link>
                      <Link href={card.codeLink} target="_blank" rel="noopener noreferrer" underline="none">
                        <Button size="small">See the code</Button>
                      </Link>
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
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