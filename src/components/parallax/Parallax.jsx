import "./parallax.scss"
import { Typography } from "@mui/material"
import { motion } from "framer-motion"
import ParticlesContainer from "../hero/particles/Particles"


const Parallax = ({type}) => {
  return (
      <div className="parallax">
            <motion.div className="textContainer">
          <Typography variant="h2" className="title">
              {type==="portfolio" ? "Featured Projects" : "Skills"}
              </Typography>
              </motion.div>
          <motion.div className="mountains"></motion.div>
          <motion.div className="particleContainer">
              <ParticlesContainer />
          </motion.div>
    </div>
  )
}

export default Parallax