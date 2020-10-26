import React, { Component } from 'react';
import fetch from 'node-fetch';
import Login from "./Components/Login";
import Ingredients from "./Components/Ingredients";
import Goal from "./Components/Goal_Meter";
import BLD from "./Components/BLD";
import Recipe from "./Components/Recipe_list";
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
       
      });
  }

  render() {
    return (
      <div id={"main"}>
        <h1>Welcome to Blue Ocean!</h1>
        <Login/>
        <Ingredients/>
        <Goal/>
        <BLD/>
        <Recipe/>
        
      </div>
    );
  }
}
