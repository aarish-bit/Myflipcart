import React from 'react'

function LeftArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        className="fas fa-chevron-left"
        style={{ ...style, display: "block" }}
        onClick={onClick}>  
      </div>
    );
}

export default LeftArrow