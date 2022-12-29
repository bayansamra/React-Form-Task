import React, { Component } from 'react'
import SocialMedia from '../SocialMedia'
import HorizentalLine from '../HorizLine'
import { object, string } from 'yup';
import './style.css'


const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export default class LoginForm extends Component {

  state = {
    email:'',
    password:''
  }

  schema = object().shape({
    email: string().email().required(),
    password: string().min(8).matches(regularExpression).required(),
  });


  onChange = (e)=>{
    const {name,value} = e.target
    this.setState({[name]:value})
  }


  handleSubmit = (e) =>{
    e.preventDefault()

    this.schema
      .validate({email:this.state.email,password:this.state.password}, { abortEarly: false })
      .then(() => {
        console.log('valid');
        this.setState((prevState) => ({ email: prevState.email, password: prevState.password }));
      })
      .catch((e) => console.log(e.errors));
  };


  render() {
    return (
      <div className='form-section login-form-section'>
        <div className='form-header form-login-header'>
          <h2>Join the game!</h2>
          <p>Go inside the best gamers social network!</p>
        </div>

        <SocialMedia />
        <HorizentalLine />
        
        <form onSubmit={this.handleSubmit}>
        
          <div className='form-input'>
              <label htmlFor="email">Your email</label>
              <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder='Enter email address' required/>
          </div>
          <div className='form-input'>
              <label htmlFor="password">Enter your password</label>
              <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder='Password' required/>
          </div>
          <div className='form-submit'>
              <button type='submit'>Login</button>
          </div>
        </form>
        <div className='form-login-footer'>
            <h4>Dont have an account? </h4>
            <button onClick={()=> this.props.changePage('register')}>Register</button>
        </div>
      </div>
    )
  }
}