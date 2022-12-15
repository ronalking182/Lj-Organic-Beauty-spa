import classes from './body.module.css'
import React from "react";
import pic3 from '../images/massage_body.webp'
import pic4 from '../images/body_contouring.jpeg'
import pic5 from '../images/micro_blading.jpeg'
import pic6 from '../images/pedicure_manicure.jpeg'
import pic7 from '../images/sauna_bath.jpeg'
import pic8 from '../images/facial_mole.jpeg'


import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const service = [
    {
        title: 'Hydro Therapy',
        body:'Relieve discomfort and promote physical well-being.',
        src:"https://n.foxdsgn.com/rela/wp-content/uploads/2019/08/thermal_bath.png"

    },
    {
        title: 'Relaxing Massages',
        body:'A whole-body hands-on treatment that helps you relax.',
        src:"https://n.foxdsgn.com/rela/wp-content/uploads/2019/08/relax_massages.png"
    },
    {
        title: 'Aroma Therapy',
        body:'The art of healing through the use of plant-extracts.',
        src:"https://n.foxdsgn.com/rela/wp-content/uploads/2019/08/Supreme_skincare.png"
    },
]

const ServiceCare =[
    {
        title:"Sauna Bath",
        body:"Our facials include a skin analysis to help individualize each facial to your unique needs."
    },
    {
        title:"Micro Blading",
        body:"Located near the verdant paddy field, this amazing spa is swathed in tropical flora and trickling waterfalls."
    },
    {
        title:"Full Body Massage/Scrub",
        body:"Includes a facial cleansing, scalp massage, and a toner. It is depending on your skin care needs."
    },
    {
        title:"Body Contouring/Shaping",
        body:"A system of medicine that treats the whole individual and removing sickness or restoring health."
    },
    {
        title:"Semi Permanent make up",
        body:"A system of medicine that treats the whole individual and removing sickness or restoring health."
    },
    {
        title:"Facials/Mole/Skin tags",
        body:"A system of medicine that treats the whole individual and removing sickness or restoring health."
    },
]

const Body = () => {

  return <>
  <motion.div 
  className={classes.body}
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
      <div className={classes.textCon}>
       <h2>Welcome to Home of Tranquility, Relaxation and Respite.</h2>

       &nbsp;

       <p>Everybody is looking for places where to relax and get more energy. In our wellness center silence, energy, beauty and vitality meet. The treatments we offer will refresh both your body and soul. We'll be glad to welcome you and recommend our facilities and services.</p>
      </div>
      <div className={classes.gridContainer}>
          {service.map((item, index) => {
            return <div  className={classes.grid} key={index} >
                  <span className={classes.imageWrapper}>
                      <img src={item.src} alt={item.title} />
                  </span>
                  <span>
                      <h4>{item.title}</h4>
                 </span>
                  <span>
                  <p>{item.body}</p>
                  </span>
            </div>
          })}
      </div>
  </motion.div>
  

  <div className={classes.care}>
    <div className={classes.serviceContainer}>
      <div className={classes.careGrid}>
        <div className={classes.backgroundBlur}>
        <p>Full Body Massage/Scrub</p>
        </div>
        <img src={pic3} alt="massage"/>
      </div>
      <div className={classes.careGrid}>
      <div className={classes.backgroundBlur}>
        <p>Body Contouring/Shaping</p>
            </div>
      <img src={pic4} alt="massage"/>
      </div>
      <div className={classes.careGrid}>
      <div className={classes.backgroundBlur}>
        <p>Micro Blading & Shading</p>
            </div>
      <img src={pic5} alt="massage"/>
      </div>
      <div className={classes.careGrid}>
      <div className={classes.backgroundBlur}>
        <p>Pedicure and Manicure</p>
            </div>
      <img src={pic6} alt="massage"/>
      </div>
      <div className={classes.careGrid}>
      <div className={classes.backgroundBlur}>
        <p>Sauna Bath</p>
            </div>
      <img src={pic7} alt="massage"/>
      </div>
      <div className={classes.careGrid}>
      <div className={classes.backgroundBlur}>
        <p>Facial/Mole/Skin Tags</p>
            </div>
      <img src={pic8} alt="massage"/>
      </div>
    </div>

  </div>

  <motion.div className={classes.closingTag}>
       <h2>Welcome to LJ Organic.</h2>
       <h2>Book Your Stay Today.</h2>
       <p><Link to='/#'>BOOK AN APPOINTMENT</Link></p>
  </motion.div>
  </>
};

export default Body;
