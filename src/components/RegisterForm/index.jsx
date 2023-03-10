import React, { Component } from 'react'
import PasswordStrength from '../PasswordStrength'
import HorizentalLine from '../HorizLine'
import { boolean, object, ref, string } from 'yup';
import {Link,Navigate} from 'react-router-dom';
import axios from 'axios';

import './style.css'

const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



export default class RegisterForm extends Component {

  state = {
    name:'',
    email:'',
    password:'',
    password2:'',
    trems:false,
    passwordStrength:0,
    isLoading: false,
    errors: [],

  }

   schema = object().shape({
    name: string().min(8, 'Name Should be more than 8').max(16,'Name Should be less than 16').required(),
    email: string().email().required(),
    password: string().min(8).matches(regularExpression).required(),
    password2: string()
      .oneOf([ref('password'), null])
      .required(),
      trems: boolean().oneOf([true]).required(),
      passwordStrength:string().max(60,'your password strength should be at least Medium strength.').matches(regularExpression).required(),
  });


  onChange = (e)=>{
    let strength = 0;
    const {name,value} = e.target
    if(name === 'password'){
      if(value.length > 4){
        strength = strength+20;
      }

      if(value.length > 10){
        strength = strength+20;
      }

      if(value.match(/[a-z]/g)){
        strength = strength+20;
      }

      if(value.match(/[A-Z]/g)){
        strength = strength+20;
      }

      if(value.match(/[0-9]/g)){
        strength = strength+20;
      }

      if(value.match(/[^0-9a-zA-Z\s]/g)){
        strength = strength+20;
      }

      if(value.match(/(.)\1/g)>0){
        strength = strength-40;
      }

      this.setState({passwordStrength:strength})
    }
    this.setState({[name]:value})
  }


  onCheck = ()=>{
    this.setState({trems:!this.state.trems})
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    this.schema
      .validate({name:this.state.name, email: this.state.email, password: this.state.password ,password2:this.state.password,trems:true}, { abortEarly: false })
      .then(async ({ name,email, password }) => {
        console.log(name,email, password);
        const res = await axios.post('https://react-tt-api.onrender.com/api/users/signup', {
          name,
          username: email,
          password,
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
    if(this.state.goToLogin){
      return <Navigate to='/login' />
    }

    return (
        <div className='form-section'>
        <div className='form-header'>
          <h2>Register Individual Account!</h2>
          <p>For the purpose of gamers regulation, your details are required.</p>
        </div>
        <hr />
        <form onSubmit={this.handleSubmit}>
        <div className='form-input'>
              <label htmlFor="name">Your Name</label>
              <input type="text" name='name' value={this.state.name} onChange={this.onChange} placeholder='Enter your name' required/>
          </div>
          <div className='form-input'>
            <label htmlFor="email">Email Address*</label>
            <input type="email" name='email' value={this.state.email} onChange={this.onChange} placeholder='Enter email address' required/>
          </div>
          <div className='form-input'>
            <label htmlFor="password">Create password*</label>
            <input type="password" name='password' value={this.state.password} onChange={this.onChange} placeholder='Password' required/>
            <PasswordStrength strength={this.state.passwordStrength}/>
          </div>

          <div className='form-input'>
            <label htmlFor="password2">Repeat password*</label>
            <input type="password" name='password2' value={this.state.password2} onChange={this.onChange} placeholder='Repeat password' required/>
          </div>

          <div className='form-checkbox'>
            <input type="checkbox" name="trems" id="terms" onChange={this.onCheck} required/>I agree to terms & conditions
          </div>

          <div className='form-submit'>
            <button type='submit'>{this.state.isLoading ? 'Loading...' : 'Register Account'}</button>
          </div>
          
            <HorizentalLine />
        </form>
        <Link to='/login' className='login-button' >login</Link>
      </div>
    )
  }
}