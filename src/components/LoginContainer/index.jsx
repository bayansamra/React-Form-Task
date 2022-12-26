import React, { Component } from 'react'
import './style.css'

class LoginContainer extends Component {
  render() {
    return (
        <section className='Login-container'>
            {this.props.children}
        </section>
    )
  }
}

export default LoginContainer;