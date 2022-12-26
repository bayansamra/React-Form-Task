import React, { Component } from 'react'
import './style.css'

class TransBackground extends Component {
  render() {
    return (
        <div className='left-side'>
            <div className='image-cover'>
                {this.props.children}
            </div>
        </div>
    )
  }
}

export default TransBackground;