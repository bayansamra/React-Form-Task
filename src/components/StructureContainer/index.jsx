import React, { Component } from 'react'
import './style.css'

class StructureContainer extends Component {
  render() {
    return (
      <div className='left-content-container'>
          <div className="left-content-header">
              {this.props.header}
          </div>

          <div className="flex-container">
              {this.props.children}
          </div>
          
      </div>
  )
  }
}
export default StructureContainer;