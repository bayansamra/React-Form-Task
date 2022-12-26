import React, { Component } from 'react'
import StructureContainer from '../StructureContainer'
import './style.css'

export default class LeftSide extends Component {
  render() {
    return (
        <StructureContainer header={this.props.logo}>
                <div className="left-content">
                    <img src={this.props.icon} alt="blue-Coma" />
                    <h4 className={`${this.props.type === 'register' ? 'font-grey' : ''}`}>{this.props.text}</h4>
                    <h4 className={`content-writer ${this.props.type === 'register' ? 'font-grey' : ''}`}>{this.props.writer}</h4>
                    {this.props.type === 'register' ? <img className='content-image' src={this.props.img} alt="image1" /> : <img className='content-shape' src={this.props.img} alt="shape" />}
                </div>
        </StructureContainer>
    )
  }
}