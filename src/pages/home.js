import React from "react";
import Body from "../components/body/body";
import Hero from "../components/hero/hero";
import {motion} from 'framer-motion'
import ReturnToTop from "../components/navigation/return-to-top";


const Home = () => {
  return  <motion.div
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
          <ReturnToTop/>
          <Hero/>
          <Body/>
  </motion.div>;
};


export default Home;
