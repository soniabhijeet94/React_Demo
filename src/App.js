import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    Persons : [
      { name : "default", age : "27" },
      { name : "Soni", age : "26" },
      { name : "Clickable", age : "25" },
    ],
    Other : "this is another property"
  }

// setState (for Class-based components) will update only the changed property. Others will be untouched.
// But while using Hook for Functional Components: useState, all states gets overwritten again.
// So there other props also gets affected, and must be copied again.
// Instead, better in that case is to create 'useState' for each property => avoid copying & better access control

  changeNameHandler = (name) => {
    this.setState({
      Persons : [
        { name : name, age : "27" },
        { name : "Soni", age : "26" },
        { name : "Clickable", age : "25" }
      ]
    });
  }

  render() {
    return (
      <div className="App">   
        <h1>Hello World</h1> {/* comment 1 */}
        <p>again...</p>

        {/*<button onClick = { this.changeNameHandler.bind(this, "Abhijeet") }>Change Name</button>*/}
        <button onClick = { () => this.changeNameHandler("Abhijeet") }>Change Name</button>

        <Person 
          name = {this.state.Persons[0].name} 
          age  = {this.state.Persons[0].age} 
        />

        <Person 
          name = {this.state.Persons[1].name} 
          age  = {this.state.Persons[1].age} >Extra: Coding
        </Person>

        <Person 
          name  = {this.state.Persons[2].name} 
          age   = {this.state.Persons[2].age} 
          click = { this.changeNameHandler.bind(this, "Abhi") } >        {/* to delegate click functionality to the custom component */}
        </Person>

      </div> // comment 2
    );

    // return React.createElement('div', { className : 'App'}, React.createElement('h1', null, 'Hello World'));

  }
}

export default App;
