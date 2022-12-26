import React, { Component } from 'react'
import RightStructureContainer from '../RightStrucConta'
import Form from '../Form'
import ArrowBack from '../ArrowBack'
import './style.css'

export default class RightSide extends Component {
  render() {
    return (
      <RightStructureContainer  header={<ArrowBack changePage={this.props.changePage} />} type={this.props.type}>
        <Form  checkUser={this.props.checkUser} addUser={this.props.addUser}  changePage={this.props.changePage} type={this.props.type} />
      </RightStructureContainer>
    )
  }
}