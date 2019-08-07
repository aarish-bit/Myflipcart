import React from 'react'

function RightArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        className="fas fa-chevron-right"
        style={{ ...style, display: "block" }}
        onClick={onClick}>  
      </div>
    );
}

export default RightArrow