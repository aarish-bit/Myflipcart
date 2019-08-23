
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Toolbar from './common-components/Navbar/Toolbar';
import Contents from './common-components/Contents-bar/Contents';
import Main from './home/Routes/Main';
import Footer from './common-components/Footer/Footer';

function App() {
  

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Toolbar className="col-12" />
        <Contents className="col-12" />
        <Main />
        <Footer />
     </Router>
    </div>
    </Provider>
  );
}

export default App;
