import React, { Component } from 'react'
import './style.css'

export default class PasswordStrength extends Component {
  render() {

    if(this.props.strength >= 100){
        return (
            
            <article className='password-strength'>
                <div className='password-strength-very-strong'></div>
                <div className='reasons-very-strong'>Very Strong Password</div>
            </article>
        )

    }else if(this.props.strength >= 80){
        return (

            <article className='password-strength'>
                <div className='password-strength-strong'></div>
                <div className='reasons-strong'>Strong Password</div>
            </article>
        )

    }else if(this.props.strength >= 60){
        return (

            <article className='password-strength'>
                <div className='password-strength-medium'></div>
                <div className='reasons-medium'>Medium Strength Password</div>
            </article>
        )

    }else if(this.props.strength >= 40){
        return (

            <article className='password-strength'>
                <div className='password-strength-low'></div>
                <div className='reasons-low'>Very Weak Password</div>
            </article>
        )
    }
  }
}