import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd'
import WrappedNormalLoginForm from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WrappedNormalLoginForm />
       
      </div>
    );
  }
}

export default App;
