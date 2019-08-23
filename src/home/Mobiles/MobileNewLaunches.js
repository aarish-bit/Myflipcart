import React from 'react'
import { NavLink } from 'react-router-dom'
import './mobile.scss'
import MobViewAll from './MobileViewAll.json'

const MobileNewLaunches = props => {
  return (
    <div>
      <div className="MobileNewLaunches">
        <div className="heading">
          <h4><b>Mobile New Launches</b></h4> 
        </div>
        <hr />
        <div className="mobile-content">
        {MobViewAll.map((data) => {
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
        </div>
      </div>
    </div>
  )
     
}
     
export default MobileNewLaunches