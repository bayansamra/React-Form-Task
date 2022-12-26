import React, { Component } from 'react'
import Register from './pages/Register';
import Login from './pages/Login';

class App extends Component {

  state = {
    currentPage:'register',
    users:[]
  }
  

  changePage = (pageName) => {
    this.setState({currentPage:pageName})
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

  render(){
    if(this.state.currentPage === 'login'){
      return(
        <div className="App">
          <Login changePage={this.changePage} checkUser={this.checkUser} />
        </div>
      );
    }else{
      return (
        <div className="App">
          <Register changePage={this.changePage} addUser={this.addUser} />
        </div>
      );
    }
  }
}

export default App;