import React, { useState as UseState } from "react";
import './scrollButton.css';
export const ScrollButton = () => {
  const [visitble, setvisitble] = UseState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setvisitble(true);
    } else if (scrolled <= 300) {
      setvisitble(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <button className="scroll-button-top" onClick={scrollTop} style={{ opacity: visitble ? 1: 0 }}>
      <i
        className="fa fa-angle-up"
        
      ></i>
    </button>
  );
};
