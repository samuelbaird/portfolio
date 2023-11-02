import './skills.scss'
import Typography from '@mui/material/Typography';
import {motion, useAnimation,} from 'framer-motion'
import { useEffect } from 'react';


const skills = [
    { title: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png' },
    { title: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' },
    { title: 'Sass', icon: 'https://sass-lang.com/assets/img/styleguide/seal-color.png' },
    { title: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png' },
    { title: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' },
    { title: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
    { title: 'Django', icon: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/django/products/220963/original-1582297809-33f3e434bab7633744d99012eec6986d.jpg?v=3&d=eyJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMGM0YjMzIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9' },
    { title: 'Node.js', icon: 'https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg' },
    { title: 'Express.js', icon: 'https://expressjs.com/images/express-facebook-share.png' },
    { title: 'MongoDB', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1awtdmBSqDBMVhzdhzTYEHLVUc5c9ShlJgjh11TuO0IYmcRjDILMqLRykz6Hq-2bVcTc&usqp=CAU' },
    { title: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png' },
    { title: 'Git', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { title: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png' },
    { title: 'Mongoose', icon: 'https://avatars.githubusercontent.com/u/7552965?s=280&v=4e' },
    { title: 'Material UI', icon: 'https://mui.com/static/logo.png' },
    { title: 'Bootstrap', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png' },
    { title: 'Framer Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg'}
]

const Skills = () => {

    const controls = useAnimation();

    useEffect(() => {
        controls.start({ y: 0, opacity: 1, transition: { type: 'spring', damping: 10, stiffness: 100 } });
    }, []);
    
  return (
    <div className='skills'>
          {skills.map((skill, index) => (
              <motion.div key={index} className='skill' initial={{ y: 100, opacity: 0 }} animate={controls}>
                  <img className={skill.icon} src={skill.icon}></img>
                  <Typography variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p" > {skill.title}</Typography>
                </motion.div>
            ))}
    </div>
  )
}

export default Skills