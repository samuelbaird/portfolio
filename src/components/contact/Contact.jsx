import "./contact.scss"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const isMobile = window.innerWidth < 738;

let variants = {}

if (!isMobile) {
    variants = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            }
        }
    };
}



const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const isInView = useInView(ref,{margin:"-100px"});

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_owl4r2b', 'template_eg9fejl', formRef.current, 'PYjIOMz9ZVK3pdHVg')
            .then((result) => {
                setSuccess(true);
            }, (error) => {
                setError(true);
            });
    }
  return (
      <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
          <motion.div className="textContainer" variants={variants}>
              <Typography variant="h2" className="title">Contact</Typography>
              <Typography variant="h5" className="subtitle">Let's get in touch!</Typography>
              <div className="item">
                  <Typography variant="h6" className="itemTitle">Email:</Typography>
                  <Typography variant="body1" className="itemBody">sam@samuelbaird.com</Typography>
              </div>
          </motion.div>
          <div className="formContainer">
              <motion.div className="mailSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay: 2, duration: 1}}>
                  <svg width="450px" viewBox="0 0 24 24"><motion.path strokeWidth={0.2} fill="none" initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration: 3}} d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"></motion.path></svg>
              </motion.div>
              <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:3, duration:1}}>
                  <input type="text" required placeholder="Name" name="name" className="formInput" />
                  <input type="text" required placeholder="Email" name="email" className="formInput" />
                  <textarea placeholder="Message" name="message" className="formInput" rows={8} />
                  <Button type="submit" variant="outlined">Send</Button>
                  {error && <Typography variant="body1" className="error">There was an error sending your message. Please try again.</Typography>}
                  {success && <Typography variant="body1" className="success">Your message has been sent!</Typography>}
              </motion.form>
          </div>
    </motion.div>
  )
}

export default Contact