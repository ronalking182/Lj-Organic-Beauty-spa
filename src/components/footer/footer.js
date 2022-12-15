import React from "react";
import classes from './footer.module.css'
import logo from '../images/Lj Organic-02.png'

import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const FooterBar = () => {
  return <div className={classes.footer}>
      <div className={classes.location}>
         <span className={classes.logo}>
             <img src={logo} alt="logo"/>
         </span>
         <span className={classes.address}>
             <p>Miyango road by farral garden opposite custom quarter ||
+234-901-7727-327 / +234-70359-08909 || M: lgorganicbeautyspa@gmail.com</p>
         </span>
         <span className={classes.socials}>
             <Link to='/#' state={{color:"#ffff"}}><FaFacebookF/></Link>
             <Link to='https://www.instagram.com/lj_organic_spa/'><AiFillInstagram/></Link>
             <button className={classes.bt} onClick={() => window.location.href= 'mailto:lgorganicbeautyspa@gmail.com'}>
                {/* <Link> */}
                    <GrMail/> 
                    {/* </Link> */}
             </button>
         </span>
      </div>
      <div className={classes.linkBtn}>
      <Link to='/'> Home </Link>
      <Link to='/Services'> Services </Link>
      <Link to='/Contact'> Contact/Book Spa  </Link>
      </div>
      <div className={classes.reserved}>
     <p> © 2022-present LJ Organic. All Rights Reserved.</p>
      </div>
  </div>;
};

export default FooterBar;
