import React, { Component } from 'react';
import Student from './Student';

class StudentsContainer extends Component {
  render() {
    const students = ["Joe", "Bama", "Brandon", "Lake", "Linsy"]
    //constant value variable
    //let for a variable that could vary
    return (
      <div>
      <h2>Students</h2>
      //instead of this
      <ul>
      <li>Bama</li>
      <li>Joe</li>
      </ul>
      //do this
      //react needs a key to tell one list item from another
      <ul>
      {students.map(student => <Student key={student} firstName={student}/>)}
      </ul>

      </div>
    )
  }
}

export default StudentsContainer;
