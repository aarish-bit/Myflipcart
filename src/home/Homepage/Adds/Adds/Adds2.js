import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import add2data from './../Adds-json-data/Adds2.json'
import './../../homepage.scss'

class Adds2 extends Component {
  render() {
    return (
      <div className="adds">
        {add2data.map((data) => {
          return (
            <div key={data.id} className="adds-data">
              <NavLink to={data.to}>
                <img src={data.src} alt={data.id} />
              </NavLink>
            </div>
          )
        })}

      </div>
    )
  }
}

export default Adds2
