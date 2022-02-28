import React from 'react'
import validator from 'validator';

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'


export const RegisterScreen = () => {


  const [ formValues, handleInputChange ] = useForm({
    name: "Hugo",
    email: "Hugo@gmail.com",
    password: "123456",
    confirm: "123456"
  });

  const { name, email, password, confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if(isFormValid()){
      console.log(" Form id Valid ");
    }

  }

  const isFormValid = () => {
    if(name.trim().length === 0) {

      console.log("Name is required");
      return false;

    }else if(!validator.isEmail( email )){

      console.log("Email is not valid");
      return false;

    }
    else if( password !== confirm && password.length < 6 ){


      console.log("Password should be at least 6 characters and match");
      return false;

    }
  }

  return (
    <div>
        <h3 className='auth__title' >Register</h3>
        <form onSubmit={ handleRegister }>
          <div className='auth__alert-error'>
            Hello world
          </div>
          <input 
            type="text"
            placeholder="Name"
            name="name"
            className='auth__input'
            autoComplete='off'
            value={ name }
            onChange={ handleInputChange }
          />
          <input 
            type="text"
            placeholder="email"
            name="email"
            className='auth__input'
            autoComplete='off'
            value={ email }
            onChange={ handleInputChange }
          />
          <input 
            type="password"
            placeholder="Password"
            name="password"
            className='auth__input'
            value={ password }
            onChange={ handleInputChange }
          />
          <input 
            type="password"
            placeholder="Confirm password"
            name="confirm"
            className='auth__input'
            value={ confirm }
            onChange={ handleInputChange }
          />

          <button 
            type='submit'
            className='btn btn-primary btn-block mb-5'
            onClick={ handleInputChange }
          >
            Register
          </button>

      
        
          <Link 
            to="/auth/login"
            className='link'
          >
            Already registered?
          </Link>
        </form>
    </div>
  )
}
