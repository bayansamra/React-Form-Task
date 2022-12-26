import React, { Component } from 'react'
import whiteLogo from '../../assets/white_logo.png'
import blueLogo from '../../assets/blue-logo.png'

export default class Logo extends Component {
  render() {
    return (
        this.props.type === 'register'? <img src={blueLogo} alt='blue-logo'></img> : <img src={whiteLogo} alt='white-logo'></img>
    )
  }
}