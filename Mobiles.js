import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import MobileFilter from './MobileFilter';
import MobViewAll from './MobileViewAll.json'
import './mobile.scss'

class Mobiles extends Component {

  render() {
    return (
      <div className="mobile-menu">
        <MobileFilter />
        <div className="mobile-list">
          <h5><b>Mobiles</b></h5>
          <div className="mobile-sort">
            <h5><b>Sort</b></h5>
            <span className="sort">Price---Low To High</span>
            <span className="sort">Price---High To Low</span>
          </div>
          <div className="mobile-list-content">
            {MobViewAll.map((data) => {
              return (
                <div key={data.id} className="mobile-list-data">
                  <img src={data.src} alt={data.title} />
                  <div className="mobile-discript">
                    <h2 className="data-title">{data.title}</h2>
                    <ul>
                      <li>{data.memo}</li>
                      <li>{data.screen}</li>
                      <li>{data.camera}</li>
                      <li>{data.Battery}</li>
                      <li>{data.processor}</li>
                      <li>{data.splash}</li>
                      <li>{data.charge}</li>
                      <li>{data.warrenty}</li>
                    </ul>
                  </div>
                  <div className="price-detail">
                    <p className="price"><i className="fas fa-rupee-sign"></i><b>{data.price}</b></p>
                    <span>Upto <b>{data.exchange}</b> On Exchange</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}


export default Mobiles

