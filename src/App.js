import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            <code>To-Do List</code>
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reacts
          </a> */}
        </header>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default App;
