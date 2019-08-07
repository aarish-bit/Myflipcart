import React, { useState, useEffect } from 'react'
import './../homepage.scss'
import Slider from "react-slick";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'

function TshirtSlider() {
  const [tShirts, setTshirts] = useState([])

  useEffect(() => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then(res => res.json())
      .then(data => {
        setTshirts(data.products)
      })
  }, [])
  console.log(tShirts)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    maxContent: 7
  };

  console.log(settings, "sett")
  return (
    <div>
      <Slider {...settings}>
     
        {tShirts.map((tshirt) => {
          return (
            <div key={tshirt.id} className="tshirt-data">
              <img src='./tshirt/user5.jpg' alt={tshirt.title} />
              <p className="style"><b>{tshirt.style}</b></p>
              <h6 className="data-title"><b>{tshirt.title}</b></h6>
              <p className="price">From <i className="fas fa-rupee-sign"></i>{tshirt.price}</p>
            </div>
          )
        })}
        
      </Slider>

    </div>
  );
}


export default TshirtSlider
