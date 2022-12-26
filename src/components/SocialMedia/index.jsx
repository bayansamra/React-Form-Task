import google from '../../assets/google.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

import React, { Component } from 'react'

class SocialMedia extends Component {
  render() {
    return (
    <div className='social-media-icons'>
        <div><img src={google} alt="google" /></div>
        <div><img src={twitter} alt="twitter" /></div>
        <div><img src={linkedin} alt="linkedin" /></div>
        <div><img src={github} alt="github" /></div>
    </div>
    )
  }
}
export default SocialMedia;