import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div style = {{backgroundImage : "linear-gradient(to right top, #051937, #004d7a, #00bf72, #a8eb12)"}}>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path ="/"><News key = "general" pageSize = {this.pageSize} category = "general"/></Route>
          <Route exact path="/general"><News key= "general" pageSize = {this.pageSize} category = "general"/></Route>
          <Route exact path="/business"><News key= "business" pageSize = {this.pageSize} category = "business"/></Route>
          <Route exact path="/entertainment"><News key ="entertainment" pageSize = {this.pageSize} category = "entertainment"/></Route>
          <Route exact path="/sports"><News key = "sports" pageSize = {this.pageSize} category = "sports"/></Route>
          <Route exact path="/health"><News key = "health" pageSize = {this.pageSize} category = "health"/></Route>
          <Route exact path="/science"><News key = "science" pageSize = {this.pageSize} category = "science"/></Route>
          <Route exact path="/technology"><News key = "technology" pageSize = {this.pageSize} category = "technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

