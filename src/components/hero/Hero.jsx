import "./hero.scss"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import headshot from '../../assets/headshot.jpg'
import ParticlesContainer from "./particles/Particles";
const Hero = () => {
  return (
    <div className='section'>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Samuel Baird
            </Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2, width: '100%' }}>
  <img 
    src={headshot} 
    alt="Profile" 
    style={{
      borderRadius: '50%', 
      width: '400px', 
      height: '400px',
      marginRight: '20px',
      border: '2px solid #2E3B55',
    }} 
  />
  <Typography 
    sx={{ 
      flex: 6,  
      textAlign: 'left', 
      marginRight: '20px',
    }} 
    variant="h6"  
    color="textSecondary" 
    paragraph
  >
    I am a Full Stack Software Engineer who brings a diverse background in music, art, and entrepreneurship to the table. I offer a unique blend of creativity and technical expertise to every project. In my previous career, I developed the ability to communicate clearly, solve problems creatively, and deliver products that made an impact in people's lives. I aspire to utilize my problem-solving abilities, meticulous attention to detail, and talent for bridging the gap between artistic expression and technical precision to contribute to cutting-edge projects that are both beautiful and impactful.
              </Typography>
              </Box>
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
          <div>
              <ParticlesContainer />
          </div>
      </div>

  )
}

export default Hero