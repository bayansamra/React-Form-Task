import React, { Component } from 'react'
import './style.css'

export default class RightStructureContainer extends Component {
  render() {
    if(this.props.type === 'register'){
        return (
          <div className='right-content-container'>
              <div className="left-content-header">
                  {this.props.header}
              </div>
              <div className="flex-container">
                  {this.props.children}
              </div>
          </div>
      )
      }else{
        return (
            <div className='right-content-container'>
                <div className="flex-container">
                    {this.props.children}
                </div>
            </div>
        )
      }
  }
}