import React from 'react'
import './homepage.scss'

function PrevArrow(props) {
  const {style, onClick } = props;
  return (
    <div
      className="fas fa-chevron-left"
      style={{ ...style, display: "block" }}
      onClick={onClick}>  
    </div>
  );
}

export default PrevArrow