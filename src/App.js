import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import {RoutesAll} from './RoutesAll'
import GameControl from "./components/GameControl/index";
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { Navigate } from 'react-router-dom';


class App extends Component {

  state = {
    isAuthorized: false,
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) this.setState({ isAuthorized: true });
  }

  login = () => this.setState({ isAuthorized: true });


  render(){
    return(
      <>
        <Routes>
        <Route path='/login' element={<>{this.state.isAuthorized ? <Navigate to='/GameControl' /> : <LoginForm login={this.login} />}</>} />
        <Route path='/register' element={<>{this.state.isAuthorized ? <Navigate to='/register' /> : <RegisterForm register={this.register} />}</>} />

          <Route path='/*' element={<RoutesAll />} />
          <Route path="/GameControl" element={<GameControl />} />

        </Routes>
      </>
    )
  }
}

export default App;


