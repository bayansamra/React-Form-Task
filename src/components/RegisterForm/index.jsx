import React, { Component } from 'react'
import PasswordStrength from '../PasswordStrength'
import HorizentalLine from '../HorizLine'
import { boolean, object, ref, string } from 'yup';
import './style.css'

const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



export default class RegisterForm extends Component {

  state = {
    name:'',
    email:'',
    password:'',
    password2:'',
    trems:false,
    passwordStrength:0
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


  handleSubmit = (e) =>{
    e.preventDefault()
    this.schema
      .validate({ name:this.state.name,email:this.state.email,password:this.state.password, rePassword: this.state.password, inChecked: true }, { abortEarly: false })
      .then(() => {
        console.log('valid');
        this.setState((prevState) => ({ name: '', email:'', password: ''}));
      })
      .catch((e) => console.log(e.errors));
      const newUser = {name:this.state.name, email:this.state.email,password:this.state.password}
      this.props.addUser(newUser);
      this.setState({email:'',password:'',password2:'',trems:false,passwordStrength:0})
      this.props.changePage('login')
  };

  

  render() {
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
            <button type='submit'>Register Account</button>
          </div>
          
            <HorizentalLine />
        </form>
        <button className='login-button' onClick={()=>this.props.changePage('login')}>login</button>
      </div>
    )
  }
}