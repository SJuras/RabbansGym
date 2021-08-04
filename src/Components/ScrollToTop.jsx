import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use';
import { FaChevronUp } from "react-icons/fa";


function ScrollToTop(){

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(pageYOffset > 100){
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if(!visible){
    return false;
  }

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth"});

  return(
    <button className="scrollup-btn" onClick={scrollUp}>
      <FaChevronUp style={{color: "#fff", fontSize: "18px"}} />
    </button>
  );
}

export default ScrollToTop;
