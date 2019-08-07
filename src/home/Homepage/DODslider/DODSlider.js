import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";
import DodSliderData from './Dodslider.json'
import './../homepage.scss'
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'


class DODSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          {DodSliderData.map((data) => {
            return (
              <div key={data.id} className="dod-data">
                <NavLink to={data.to}>
                  <img src={data.src} alt={data.title} />
                </NavLink>
                <h6 className="data-title"><b>{data.title}</b></h6>
                <p className="price">From <i className="fas fa-rupee-sign"></i>{data.from}</p>
                <p className="brands">{data.brands}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default DODSlider