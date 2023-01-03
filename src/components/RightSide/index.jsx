import React, { Component } from 'react'
import RightStructureContainer from '../RightStrucConta'
import Form from '../Form'
import ArrowBack from '../ArrowBack'
import './style.css'

export default class RightSide extends Component {
  render() {
    return (
      <RightStructureContainer  header={<ArrowBack />} type={this.props.type}>
        <Form  checkUser={this.props.checkUser} addUser={this.props.addUser}  type={this.props.type} />
      </RightStructureContainer>
    )
  }
}