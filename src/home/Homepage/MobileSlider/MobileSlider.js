import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";
import mobiledata from './MobileSlider.json'
import './../homepage.scss'
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'


class MobileSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      maxContent:7
    };
    return (
      <div>
        <Slider {...settings}>
          {mobiledata.map((data) => {
            return (
              <div key={data.id} className="mobile-data">
                <NavLink to={data.to}>
                  <img src={data.src} alt={data.title} />
                </NavLink>
                <h6 className="data-title"><b>{data.title}</b></h6>
                <p className="disc">{data.discription}</p>
                <p className="price">From <i className="fas fa-rupee-sign"></i>{data.price}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default MobileSlider