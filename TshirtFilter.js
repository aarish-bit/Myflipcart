import React, { Component } from 'react'
import './Tshirt.scss'

class TshirtFilter extends Component {
  render() {
    return (
      <div className="tshirtfilter">
        <h3>Filters</h3>
        <div class="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li>html</li>
            <li>cSS</li>
            <li>JavaScrip</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TshirtFilter
