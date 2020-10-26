import React, { Component, Fragment } from 'react';



export default class Login extends Component {
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
        <div id={"login"}>
        {/* your code here */}
          
         
          
        </div>
      );
    }
  }