import React from "react";
import classes from './hero.module.css';

import {motion} from 'framer-motion';
 import bg1 from '../images/adetayo-adefala-1K2iQQM31D0-unsplash.jpg'
 import { Link } from 'react-router-dom'



const Hero = () => {
  return <div className={classes.hero}>
   <motion.div
    className={classes.homeOne}>
        <h3>Welcome To <span className={classes.spa}>LJ Organic Beauty Spa </span></h3>
        <h1>All kinds of spa and beauty treatments for your body and soul</h1>
        <button className={classes.bookButton}>
        <Link to="/Contact">
          Book a Session
        </Link>
        </button>
      </motion.div> 
      <motion.div
       className={classes.homeTwo}>
        <span className={classes.smallTalk}> 
        <h3>Welcome To <span className={classes.spa}>LG Beauty Spa </span></h3>
        <h1>All kinds of spa and beauty treatments for your body and soul</h1>
          <button className={classes.bookButton}>
          <Link to="/Contact">
            Book a Session
           </Link>
            </button>
        </span>
         <img src={bg1} alt='spa pic'/> 
        </motion.div> 
  </div>;
};



export default Hero;
