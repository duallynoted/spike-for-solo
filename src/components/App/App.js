import React, { Component } from 'react';
import './App.css';
import UserForm from '../UserForm/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Spike for Solo Project</h1>
          <UserForm />
        </header>
      </div>
    );
  }
}

export default App;
