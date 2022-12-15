import React from "react";
import classes from '../components/styles/services.module.css'

import image01 from '../components/images/image01.jpeg'
import image02 from '../components/images/image02.jpeg'
import image03 from '../components/images/image03.jpeg'

import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'





const service = [
  {
      title: 'Salt Glow',
      body:'Deep Sea and mineral salts are combined with essential oils,then massaged over the body in a light circular motion to deeply cleanse,exfoliate,and stimulate your circulation. This treatment will leave your skin renewed,rehydrated, and glowing',
      src:image01

  },
  {
      title: 'Facials/Mole/Skin Tags',
      body:'A true gift from the sea all the way from Brittany. Relax with luxuriate in steady warmth while your skin detoxifies and absorbs intense beneficial nutrients that to send the rich array of minerals, vitamins and enzymes from this seaweed',
      src:image02
  },
  {
      title: 'Full Body Massage/Scrub',
      body:'Gently vanquishing aches and pains with a thick layer of warm moor mud infused with pure essential oil that is applied over the entire body for a relaxing treatment that the body absorbs.',
      src:image03
  },
]

const Services = () => {
  return <motion.div
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
    <div className={classes.services}>
      
      <div className={classes.header}>
        <span className={classes.main_text_header}>
           <h1>An Incredible Spa Experience</h1>
           <p>LJ's Organic Beauty Spa is a genuine oasis in the middle of the city that combines relaxing water procedures, beauty and wellness services, and sports.</p>
     <div className={classes.overlay}></div>
           </span>
      </div>

<div className={classes.tag_whole}>
{service.map((item, index) => {
      return <div className={classes.tag} key={index}>
      <span className={classes.tag_pic}>
      <img src={item.src} alt={item.title} />
      </span>
      <span className={classes.tag_text}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </span>
   </div>
    })}
      </div>

      <div className={classes.ad}>
      <div className={classes.skinCare} >
          <h2>Semi Permanent Make Up</h2>
          <p>People don’t want to spend more than five to 10 minutes applying make-up - especially pencilling or powdering - and it can only look so natural. At Lj Organic Beauty Spa we make sure you get the best of all treatment, including semi permanent make, to ensure you don't wast that precious time of your during make up.</p>
      </div>
      <div className={classes.skinCare} >
          <h2>Skin Care and FaceMasks</h2>
          <p>We offer a variety of facial services to suit your individual skin care needs. Our estheticians use only the finest Bio-elements products based on trace minerals, essential oils, and plant extracts. Every facial includes a skin analysis, deep pore cleansing, gentle exfoliation, customized mask, and moisture treatment.</p>
      </div>
  </div>
    </div>
      <div className={classes.closingTag}>
       <h2>Welcome to LJ Organic.</h2>
       <h2>Book Your Stay Today.</h2>
       <p><Link to="/Contact">BOOK AN APPOINTMENT</Link></p>
  </div>
  </motion.div>
}

export default Services;
