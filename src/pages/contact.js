import React from "react";
import classes from '../components/styles/contact.module.css'


import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import ReturnToTop from "../components/navigation/return-to-top";


const Contact = () => {
  return <motion.div
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
          <div className={classes.closingTag}>
       <h2>Welcome to LJ Organic.</h2>
       <h2>Book Your Stay Today.</h2>
  </div>
  <div className ={classes.address}>
      <div className={classes.side}>
        <span className={classes.add}>
        <h2>Get in Touch With Us And We’ll Help Your Health!</h2>
        <p>Interested in our spa services? We want your spa experience to be a memorable one.</p>
        </span>
        <span className={classes.socials}>
          <h5>Jos</h5>
          <p>Miyango road by farral garden opposite custom quarter</p>
          <Link to='mailto:lgorganicbeautyspa@gmail.com'><a href='mailto:contact@yourdomain.com'>lgorganicbeautyspa@gmail.com</a></Link> <br/>
          <Link to='tel:+234-901-7727-327'><a href='tel:+234-901-7727-327'>+234-901-7727-327</a></Link> <br/>
          <Link to='tel:+234-70359-08909'><a href='tel:+234-70359-08909'>+234-70359-08909</a></Link>
        </span>
      </div>

      <div className={classes.form}>
    <form action='mailto:lgorganicbeautyspa@gmail.com'
     method='POST'
     enctype='multipart/form-data'
     name='EmailForm'
     >
      <h3>Need to Make an Enquiry?</h3>
<input type='text' size='19' placeholder="First Name *"/>
<input type='text' size='19' placeholder="Last Name *"/>
<input type='text' size='19' placeholder="Phone Number *"/>
<input type='email' size='19' placeholder="Email *"/>
 <textarea placeholder="Your message *" rows='6' cols='20'>
</textarea> 
<input type='submit' value='Submit Message'/> 
</form>
      </div>
      
  </div>
  <ReturnToTop/>
  </motion.div>
};

export default Contact;
