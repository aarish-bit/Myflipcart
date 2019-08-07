import React, { Component } from 'react';
import Slider from "react-slick";
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import './carousel.scss'



const items = [
  {
    id:'1',
    src: './Carousel/ban4.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id:'2',  
    src: './Carousel/ban2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id:'3',    
    src: './Carousel/ban3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    id:'4',    
    src: './Carousel/ban1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id:'5',    
    src: './Carousel/ban5.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id:'6',    
    src: './Carousel/ban11.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }

];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <RightArrow />,
      prevArrow: <LeftArrow />
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          {items.map((data) => {
            return (
              <div key={data.id} className="carousel-data">
                  <img src={data.src} alt={data.title} />
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}