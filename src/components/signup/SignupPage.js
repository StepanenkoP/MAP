import React, { Component } from 'react';
import logo from '../../img/signup/logo.png'
import SignupForm from './SignupForm'

class SignupPage extends Component {
  render() {
    return (
      <div className="auth_wrapper">
        <div className="auth_wrapper__logo"><img src={logo} alt="alt"/></div>
        <SignupForm />
      </div>
    );
  }
}

export default SignupPage;
