import React, { Component } from 'react'
import './homepage.scss'
import { NavLink } from 'react-router-dom'
import Carousel from './Carousel/Carousel';
import Timer from './Timer';
import GadjetAdd from './../Dealsoftheday/GadgetAdd';
import DODSlider from './DODslider/DODSlider';
import Adds1 from './Adds/Adds/Adds1';
import Adds2 from './Adds/Adds/Adds2';
import MobileSlider from './MobileSlider/MobileSlider';
import TshirtSlider from './TshirtSlider/TshirtSlider';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel className="col-md-12 col-sm-12 col-xs-12" />
        <div className="row">
          <div className="dealsoftheday">
            <span className="dod-heading">
              <h4><b>Flipstart Deals Of The Day</b></h4>
              <span className="timer">
                <i className="fas fa-stopwatch"></i>
                <Timer />
              </span>
              <span className="view-all">
                <NavLink to='./DealsOfTheDay'>VIEW ALL</NavLink>
              </span>
            </span>
            <hr></hr>
            <DODSlider />
          </div>
          <GadjetAdd />
        </div>
        <div>
          <Adds1 />
        </div>
        <div className="Mobile-new-launches">
          <span className="mobile-heading">
            <h4><b>Mobile new launches</b></h4>
            <span className="mobile-view-all">
              <NavLink to='./MobileNewLaunches'>VIEW ALL</NavLink>
            </span>
          </span>
          <hr></hr>
          <MobileSlider />
        </div>
        <div>
          <Adds2 />
        </div>
        <div className="tshirts-new">
          <span className="tshirts-heading">
            <h4><b>T-shirts New Collection</b></h4>
            <span className="tshirts-view-all">
              <NavLink to='./tshirts'>VIEW ALL</NavLink>
            </span>
          </span>
          <hr></hr>
          <TshirtSlider />
        </div>
        <div>
          <Adds1 />
        </div>
      </div>
    )
  }
}

export default Homepage
