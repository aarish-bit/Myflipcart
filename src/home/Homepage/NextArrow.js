import React from 'react'
import './homepage.scss'

function NextArrow(props) {
  const {style, onClick } = props;
  return (
    <div
      className="fas fa-chevron-right"
      style={{ ...style, display: "block" }}
      onClick={onClick}>  
    </div>
  );
}

export default NextArrow