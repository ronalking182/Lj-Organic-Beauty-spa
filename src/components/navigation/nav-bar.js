import classes from './nav-bar.module.css';
import {useState} from "react";

import { Link } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'
import  {motion } from 'framer-motion'
import logo from '../images/Lj Organic-02.png'

const NavLinks = [
    {
        linkTitle:"Home",
        initial:"{{y:-200,opacity:0}}",
        animate : "{{y:0,opacity:1}}",
        transition:"{{delay:0.4, duration:1}}",
        location:"/"
    },
    {
        linkTitle:"Services",
        initial:"{{y:-200,opacity:0}}",
        animate : "{{y:0,opacity:1}}",
        transition:"{{delay:0.5, duration:1}}",
        location:"/Services"
    },
   
    {
        linkTitle:"Contact/Book Spa",
        initial:"{{y:-200,opacity:0}}",
        animate : "{{y:0,opacity:1}}",
        transition:"{{delay:0.7, duration:1}}",
        location:"/Contact"
    },
    
]



const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    
    const handleChange = () =>{
        if(isOpen === true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }

  return <motion.div
    initial={{y:-200,opacity:0}}
    animate = {{y:0,opacity:1}}
    transition={{delay:0.2}}
   className={classes.nav}>
      <span className={classes.logoContainer}>
        
          <Link to='/'>
             <img className={classes.Logo} src={logo} alt='logo'/> 
             </Link>
      </span>
      <motion.span 
       className={isOpen ?  `${classes.menu}`  : `${classes.noShow}`}
       >
          <ul className={classes.ul}>
              {
                NavLinks.map((menu, index) =>{
                    return <motion.li
                    initial={menu.initial}
                    animate = {menu.animate}
                    transition={menu.transition}
                    className={isOpen ? `${classes.res}` : ''}
                    onClick={isOpen && handleChange}
                    key={index}
                    >
                       <Link to={menu.location}> {menu.linkTitle} </Link>
                    </motion.li>
                })  
              }
          </ul>
      </motion.span>
      <span 
       onClick={handleChange} className={classes.ham}>
      <Hamburger  toggled={isOpen} toggle={setOpen} />
      </span>
  </motion.div>;
};

export default NavBar;
