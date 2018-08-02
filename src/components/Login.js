import React, { Component } from 'react';
import '../App.css';
import 'antd'
import WrappedNormalLoginForm from './WrappedNormalLoginForm'

class Login extends Component {
  render() {
    return (
      <div className="App">
        <WrappedNormalLoginForm />
      </div>
    );
  }
}

export default Login;
