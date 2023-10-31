import "./portfolio.scss"
import uroBackground from "../../assets/uroBackground.jpg"
import home from '../../assets/home.png'
import icon from '../../assets/big-brand-icon.jpg'
import Screenshot3 from '../../assets/Screenshot3.png'
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const cards = [{
  title: "Uro's Journey",
  description: 'Browser based platform game.',
  image: uroBackground,
  appLink: 'https://samuelbaird.github.io/Uros-Journey/',
  codeLink: 'https://github.com/samuelbaird/Uros-Journey'
},
  {
    title: 'SyncedIn',
    description: 'Job search app that matches employers and seekers based on matching skills.',
    image: home,
    appLink: 'https://syncedin2-d40349e12dd2.herokuapp.com/',
    codeLink: 'https://github.com/kenneychan/SyncedIn'
  },
  {
    title: 'FitBuddy', 
    description: 'Fitness app that allows users to build and track custom workouts, plan bike and run routes, and select from a database of exercises.',
    image: icon,
    appLink: 'https://fitbuddy-app-b650cc5e2b80.herokuapp.com/',
    codeLink: 'https://github.com/samuelbaird/FitBuddy'
  },
  {
    title: 'PlaybookProphet',
    description: 'Statistical projection app for fantasy football players.',
    image: Screenshot3,
    appLink: 'https://playbookprophet-8d84a7dcc6b8.herokuapp.com/',
   }];

const Card = ({ card }) => {

    const ref = useRef();
    
    const { scrollYProgress } = useScroll({ target: ref, });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <div className="section">
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={card.image} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <Typography variant="h4" color="text.primary" >
                        {card.title}
                    </Typography>
                    <Typography variant="body1" color="text.primary" >
                        {card.description}
                        </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        >
                        <Link href={card.appLink} target="_blank" rel="noopener noreferrer" underline="none">
                            <Button variant="contained">See the app</Button>
                        </Link>
                        <Link href={card.codeLink} target="_blank" rel="noopener noreferrer" underline="none">
                            <Button variant="outlined">See the code</Button>
                        </Link>
                    </Stack>
                </motion.div>   
                </div>
            </div>
        </div>
    )
}


const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    
    const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90});
  return (
      <div className="portfolio" ref={ref}>
          <div className="progress">
              <Typography variant="h3" align="center" color="text.primary" >
                  Featured Projects
              </Typography>
              <motion.div style={{scaleX}} className="progressBar">
                  
              </motion.div>
          </div>
          {cards.map((card) => (
              <Card card={card} key={card.title} />
            ))}
    </div>
  )
}

export default Portfolio;