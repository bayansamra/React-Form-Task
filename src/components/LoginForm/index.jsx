import React, { Component } from 'react'
import SocialMedia from '../SocialMedia'
import HorizentalLine from '../HorizLine'
import {Link} from 'react-router-dom'
import { object, string } from 'yup';
import axios from 'axios';
import './style.css'


const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



export default class LoginForm extends Component {

  state = {
    email:'',
    password:'',
    isLoading: false,
    errors: [],

  }

  schema = object().shape({
    email: string().email().required(),
    password: string().min(8).matches(regularExpression).required(),
  });


  onChange = (e)=>{
    const {name,value} = e.target
    this.setState({[name]:value})
  }


  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    this.schema
      .validate({ email: this.state.email, password: this.state.password }, { abortEarly: false })
      .then(async ({ email, password }) => {
        console.log(email, password);
        const res = await axios.post('https://react-tt-api.onrender.com/api/users/login', {
          username: 'user@user.com',
          password:'user123',
        });

      
        if (res) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          this.props.login();
        }
      })
      .catch((error) => {
        if (error.errors) {
          this.setState({ errors: error.errors });
        } else {
          this.setState({ errors: [error.message] });
        }
      })
      .finally(() => this.setState({ isLoading: false }));
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
              <button type='submit' >{this.state.isLoading ? 'Loading...' : 'Login'}</button>
          </div>
        </form>
        <div className='form-login-footer'>
            <h4>Dont have an account? </h4>
            <Link className='form-login-footer-btn' to='/register'>Register</Link>
        </div>
      </div>
    )
  }
}