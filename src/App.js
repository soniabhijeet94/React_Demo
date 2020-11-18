import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <h1>Hello World</h1> {/* comment 1 */}
        <p>again...</p>
      </div> // comment 2
    );

    // return React.createElement('div', { className : 'App'}, React.createElement('h1', null, 'Hello World'));

  }
}

export default App;
