import React, { Component } from 'react'
import ArrowBackIcon from '../../assets/arrow_back.png'
import './style.css'

export default class ArrowBack extends Component {
  render() {
    return (
        <div className='Arrow-back-cont' onClick={()=>this.props.changePage('login')}>
            <img src={ArrowBackIcon} alt="ArrowBackIcon" />
            <h4>Back</h4>
        </div>
    )
  }
}