import React, { Component } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import {Login,Register,Game,LastPlayed} from '../../pages'

export default class RoutesAll extends Component {

  state = {
    users:[],
  }

  addUser = (newUser) => {
    this.setState(prevState => ({users:[...prevState.users,newUser]}))
  }

  checkUser = (singleUser) =>{
    const findingUser = this.state.users.find((user)=> user.email === singleUser.email)

    if(findingUser){
      if(findingUser.password!== singleUser.password){
        return 'invalid password'
      }
      return 'valid'
    }else{
      return 'inValid'
    }
  }


  
  render() {
    return (
      <Routes>
            <Route index element={<Login checkUser={this.checkUser} />} />
            <Route path='register' element={<Register addUser={this.addUser} />} />
            <Route path='profile/:id' element={this.state.users.length > 0?
                <Game /> : <Navigate to='/' />} />
      </Routes>
    )
  }
}