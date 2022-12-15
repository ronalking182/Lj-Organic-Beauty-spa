import{useEffect, useState} from "react";
import classes from './return-to-top.module.css'
import {AiOutlineArrowUp} from 'react-icons/ai'


const ReturnToTop = () => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);


    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
 console.log(`Height: ${windowSize.innerHeight}`)
  return (
    <>
        <button
        className={classes.backToTop}
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <AiOutlineArrowUp/>
        </button>
    </>
  )
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}

export default ReturnToTop