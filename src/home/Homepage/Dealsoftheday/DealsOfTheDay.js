import React from 'react'
import { NavLink } from 'react-router-dom'
import Timer from '../Timer';
import './dod.scss'
import dod from './dod.json'

const DealsOfTheDay = props => {
  return (
    <div>
      <div className="deals-of-the-day">
        <div className="heading">
          <h4><b>Flipstart Deals Of The Day</b></h4>
          <span className="timer">
            <i className="fas fa-stopwatch"></i>
            <Timer />
          </span>  
        </div>
        <hr />
        <div className="deals-content">
        {dod.map((data) => {
          return (
            <div key={data.id} className="deals-data">
              <NavLink to={data.to}>
                <img src={data.src} alt={data.title} />
              </NavLink>
              <h6 className="data-title"><b>{data.title}</b></h6>
              <p className="price">From <i className="fas fa-rupee-sign"></i>{data.from}</p>
              <p className="brands">{data.brands}</p>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
     
}
     
export default DealsOfTheDay