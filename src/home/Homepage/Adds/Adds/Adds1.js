import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import add1data from './../Adds-json-data/Adds1.json'
import './../../homepage.scss'

class Adds1 extends Component {
  render() {
    return (
      <div className="adds">
        {add1data.map((data) => {
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

export default Adds1
