import React, { Component } from 'react';

class Student extends Component {
  render() {
    return (
      <li>{this.props.firstName}</li>
    )
  }
  }
  //pass components from parent to child by passing props
  //component is going to have properties that are given to it by its parent


  export default Student;
