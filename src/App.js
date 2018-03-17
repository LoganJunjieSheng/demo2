import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routers from './router/Router'
import MyContact from './Component/contact'
import Footer from './Component/footer'
import MyNav from './Component/nav'
import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <div>
          <MyNav/>
          <Routers />

          </div>
        </Router>
        <div  className='MyContact'><MyContact /></div>
        <Footer/>
      </div>
    );
  }
}

export default App;
