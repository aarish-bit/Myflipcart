import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'

const Footer = props => {
  return (
    <footer className="footer">
      <div className="row footer-contents">
        <span className="about col-md-1 col-sm-4 col-xs-6">
          <h6>ABOUT</h6>
          <NavLink to="">Contact Us</NavLink>
          <NavLink to="">About Us</NavLink>
          <NavLink to="">Flipcart Stories</NavLink>
          <NavLink to="">Press</NavLink>
        </span>
        <span className="help col-md-2 col-sm-4 col-xs-6">
          <h6>HELP</h6>
          <NavLink to="">Payments</NavLink>
          <NavLink to="">Shipping</NavLink>
          <NavLink to="">Cancellation & Returns</NavLink>
          <NavLink to="">FAQ</NavLink>
          <NavLink to="">Report Infringement</NavLink>
        </span>
        <span className="policy col-md-2 col-sm-4 col-xs-6">
          <h6>POLICY</h6>
          <NavLink to="">Return Policy</NavLink>
          <NavLink to="">Terms Of Use</NavLink>
          <NavLink to="">Security</NavLink>
          <NavLink to="">Privacy</NavLink>
          <NavLink to="">Sitemap</NavLink>
          <NavLink to="">EPR Compliance</NavLink>
        </span>
        <span className="social col-md-1 col-sm-4 col-xs-6">
          <h6>SOCIAL</h6>
          <NavLink to="">Facebook</NavLink>
          <NavLink to="">Twitter</NavLink>
          <NavLink to="">YouTube</NavLink>
        </span>
        <span className="mail col-md-3 col-sm-4 col-xs-6">
          <h6>Mail Us</h6>
          <p>Flipkart Internet Private Limited,
              Buildings Alyssa, Begonia &
              Clove Embassy Tech Village,
              Outer Ring Road, Devarabeesanahalli Village,
              Bengaluru, 560103,
              Karnataka, India.
          </p>
        </span>
        <span className="address col-md-3 col-sm-4 col-xs-6">
          <h6>Registered Office Address</h6>
          <p>Flipkart Internet Private Limited,YouTube
            Buildings Alyssa, Begonia &
            Clove Embassy Tech Village,
            Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103,
            Karnataka, India
            CIN : U51109KA2012PTC066107
            Telephone: 1800 208 9898
          </p>
        </span>
      </div>
      <div className="contents-2">
        <NavLink to="">Sell On Flipkart</NavLink>
        <NavLink to="">Advertise</NavLink>
        <NavLink to="">Gift Cards</NavLink>
        <NavLink to="">Help Center</NavLink>
        <p>2007-2019 Flipkart.com</p>
      </div>
    </footer>
  )
}

export default Footer
