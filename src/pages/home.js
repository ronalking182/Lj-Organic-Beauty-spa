import React from "react";
import Body from "../components/body/body";
import Hero from "../components/hero/hero";
import {motion} from 'framer-motion'


const Home = () => {
  return  <motion.div
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
          <Hero/>
          <Body/>
  </motion.div>;
};


export default Home;
