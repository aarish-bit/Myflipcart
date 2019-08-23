import React from 'react'
import './main.scss'
import {Route, Switch } from 'react-router-dom'
import Homepage from './../Homepage/Homepage'
import DealsOfTheDay from '../Dealsoftheday/DealsOfTheDay'
import MobileNewLaunches from './../Mobiles/MobileNewLaunches'
import Tshirt2 from '../Tshirt/Tshirt2';
import Cart from '../../common-components/Cart/Cart';


const Main = props => {
    return(
      <div className="main">
        <main>          
          <Switch> 
            <Route exact path="/" component={Homepage} />
            <Route exact path="/DealsOfTheDay" component={DealsOfTheDay} />
            <Route exact path="/MobileNewLaunches" component={MobileNewLaunches} />
            <Route exact path="/tshirts" component={Tshirt2} />
            <Route exact path="/cart" component={Cart} />
          </Switch>  
        </main>
      </div>   
    )   
}

export default Main