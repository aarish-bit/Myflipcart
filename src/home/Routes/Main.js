import React from 'react'
import './main.scss'
import {Route, Switch } from 'react-router-dom'
import Homepage from './../Homepage/Homepage'
import DealsOfTheDay from '../Homepage/Dealsoftheday/DealsOfTheDay'
import MobileNewLaunches from './../Homepage/Mobiles/MobileNewLaunches'
import Tshirt from '../Homepage/Tshirt/Tshirt';


const Main = props => {
    return(
      <div className="main">
        <main>          
          <Switch> 
            <Route exact path="/" component={Homepage} />
            <Route exact path="/DealsOfTheDay" component={DealsOfTheDay} />
            <Route exact path="/MobileNewLaunches" component={MobileNewLaunches} />
            <Route exact path="/tshirts" component={Tshirt} />
          </Switch>  
        </main>
      </div>   
    )   
}

export default Main