import React, { Component } from 'react';
import fetch from 'node-fetch';
import Login from "./Components/Login";
import Ingredient_Selection from "./Components/Ingredient_Selection";
import Ingredient_results from "./Components/Ingredient_results";
import Ingredient_DayPlan from "./Components/Ingredient_DayPlan";



// import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //can be either selection/results/dayplan for render
      ingredient: null,
      
    };
    // this.api = `http://localhost:8000/api/example`;
  }
  // componentDidMount() {
  //   fetch(this.api)
  //     .then(res => res.json())
  //     .then(seaCreatures => {
       
  //     });
  // }

  render() {
    //conditional to determine which ingredient page is going to render based off of the state for ingredient
    // <Ingredient_Selection/>
    // <Ingredient_results/>
    // <Ingredient_DayPlan/>


    return (
      <div id={"main"}>
        <h1>Welcome to Blue Ocean!</h1>
        <Login/>

      </div>
    );
  }
}
