import React, { Component } from 'react';
// the 'react' package is composed of at least an object, with a key called Component
//the import statement brings in the whole object
//and calls it React
//and brings in React.Component and calls it Component
import StudentsContainer from './StudentsContainer';
//React is an object with a property called Component
//These braces say use React.Component under the name Component
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //a react component is a wayof generating user interface - something showing up on the screen
  //construct known as Component that React has built in
  //React doesn't know what you want in your UI
  //A component knows it has to be rendered but it doesn't know what should show up on the screen
  //Class App extends Component means I'm going to start with the idea of Component and specialize it for this particular Component

  render() {
  // gets the component to show up
    return (
      //looks like HTML
      //This is not HTML or JavaScript - it's called JSX
      //JSX looks like HTML, generates HTML, but is not HTML
      //It's going to become JavaScript on its way to becoming HTML
        //This logo in braces behaves like string interpolation

      <div className="App">
        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          I just got started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StudentsContainer/>
      </div>
    );
  }
}

export default App;

//properties are passed to the child through the parent
