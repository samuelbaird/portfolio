import "./parallax.scss"
import { Typography } from "@mui/material"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const Parallax = ({ type }) => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const yBg=useTransform(scrollYProgress,[0,1],["-70%", "500%"])
    const yText=useTransform(scrollYProgress,[0,1],["0%", "100%"])
  return (
      <div className="parallax">
            <motion.div style={{ y: yText }} className="textContainer">
          <Typography variant="h2" className="title">
              {type==="portfolio" ? "Featured Projects" : "Skills"}
              </Typography>
              </motion.div>
          <motion.div className="mountains"></motion.div>
          <motion.div style={{ x: yBg }} className="stars"></motion.div>
  
    </div>
  )
}

export default Parallax