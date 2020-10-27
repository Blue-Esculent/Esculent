import React, { Component, Fragment } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Goal from "./Components/Goal_Meter";



export default class Recipe extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
     
    }
    componentDidMount() {
      
    }
  //
    render() {
      return (
        <div id={"dayplan"}>
        <Goal/>
        {/* your code here */}
          
         
          
        </div>
      );
    }
  }