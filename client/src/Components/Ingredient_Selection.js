import React, { Component, Fragment } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class Ingredients extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //name from login component
        name: null,
        //date selected from calender 
        date: null,
        //decideds what is conditionally rendered between ingredient selection, ingredient results, or user selected recipes
        ingredientRender: null,

        
      };
      // this.api = `http://localhost:8000/api/example`;
    }

    dateSelected(){
      //when date is selected need to set state to current date
      //make api call to db to see if user has info for that date yet
      //conditional to change state for conditional render if infoexist/info doesnt exist
      console.log("hello");
    }

    componentDidMount() {
      // fetch(this.api)
      //   .then(res => res.json())
      //   .then(seaCreatures => {
         
      //   });
    }
  
    render() {
      return (
        <div id={"ingredients"}>
        <div id={"plan"}>
        <h1>{this.state.name} DAILY NUTRITION PLAN</h1>
        <DatePicker selected={startDate} onChange={this.dateSelected()} />

        </div>
        <div id={"breakfast"}>
        <h1>BREAKFAST</h1>

        </div>
        <div id={"lunch"}>
        <h1>LUNCH</h1>

        </div>
        <div id={"dinner"}>
        <h1>Dinner</h1>
          
        </div>
        {/* your code here */}
          
         
          
        </div>
      );
    }
  }