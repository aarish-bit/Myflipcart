import React from 'react'
import './Toolbar.scss'
import { NavLink } from 'react-router-dom'
import { Navbar, NavItem} from 'reactstrap';

const Toolbar = props => (
  <header>
    <Navbar className="navbar">
      <span className="space"></span>
      <NavItem className="main-logo">
        <NavLink to='./'>
          <img src="logo/flipkart.png" alt="logo" className="logo"></img>
        </NavLink>
        <span className="explore">
          Explore
          <span className="plus">Plus</span>
          <img src="logo/plus.png" alt="plus"></img>
        </span>
      </NavItem>
      <NavItem>
        <input type="search"
          placeholder="Search for products, brands and more"
          className="search">
        </input>
        <button className="search-icon" type="submit"><i className="fas fa-search"></i></button>
      </NavItem>
      <span className="space2"></span>
      <NavItem className="dropdown">
        <button className="dropbtn"><strong>My Account</strong>
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className="dropdown-content">
          <NavLink to=""><i className="fas fa-user-circle"></i><label>My Profile</label></NavLink>
          <NavLink to=""><i className="fas fa-plus"></i><label>FLipkart Plus Zone</label></NavLink>
          <NavLink to=""><i className="fas fa-gamepad"></i><label>Game Zone</label></NavLink>
          <NavLink to=""><i className="fas fa-folder"></i><label>Orders</label></NavLink>
          <NavLink to=""><i className="fas fa-heart"></i><label>Wishlist</label></NavLink>
          <NavLink to=""><i className="far fa-comment"></i><label>My Chats</label></NavLink>
          <NavLink to=""><i className="fas fa-box"></i><label>Rewards</label></NavLink>
          <NavLink to=""><i className="fas fa-wallet"></i><label>Gift Cards</label></NavLink>
          <NavLink to=""><i className="fas fa-bell"></i><label>Notification</label></NavLink>
          <NavLink to=""><i className="fas fa-sign-out-alt"></i><label>Logout</label></NavLink>
        </div>
      </NavItem>
      <NavItem className="dropdown">
        <button className="dropbtn"><strong>More</strong>
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className="dropdown-content2">
          <NavLink to=""><i className="fas fa-bell"></i><label>Notification Preferences</label></NavLink>
          <NavLink to=""><i className="fas fa-briefcase"></i><label>Sell On Flipcart</label></NavLink>
          <NavLink to=""><i className="fas fa-question-circle"></i><label>24 x 7 Customer Care</label></NavLink>
          <NavLink to=""><i className="fas fa-bell"></i><label>Advertise</label></NavLink>
          <NavLink to=""><i className="fas fa-download"></i><label>Download App</label></NavLink>
        </div>
      </NavItem>
      <NavItem className="cart">
        <NavLink to='./cart'><i className="fas fa-shopping-cart"></i><strong>Cart</strong></NavLink>
      </NavItem>
    </Navbar>
  </header>
)

export default Toolbar
