import React, { Component } from 'react'
import ArrowBackIcon from '../../assets/arrow_back.png'
import { Link } from 'react-router-dom'
import './style.css'

export default class ArrowBack extends Component {
  render() {
    return (
        <Link to='/' className='Arrow-back-cont'>
            <img src={ArrowBackIcon} alt="ArrowBackIcon" />
            <h4>Back</h4>
        </Link>
    )
  }
}