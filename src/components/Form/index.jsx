import React, { Component } from 'react'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import './style.css'

 class Form extends Component {
  render() {
    if(this.props.type === 'register'){
        return (
          <RegisterForm addUser={this.props.addUser}  />
        )
      }else{
        return (
          <LoginForm checkUser={this.props.checkUser}  />
        )
      }
    }
   
}

export default Form;