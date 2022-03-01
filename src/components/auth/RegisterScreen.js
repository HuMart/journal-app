import React from 'react'
import validator from 'validator';

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';


export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const { msgError }  = useSelector( state => state.ui );

  

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
      dispatch( startRegister(email, password, name));
    }

  }

  const isFormValid = () => {
    if(name.trim().length === 0) {

      dispatch( setError("Name is Required") );
      return false;

    }else if(!validator.isEmail( email )){

      dispatch( setError("Emaill is not valid") );
      return false;

    }
    else if( password !== confirm || password.length < 6 ){


      dispatch( setError("Password must be at least 6 characters and match") );
      return false;

    }

    dispatch( removeError() );
    return true;
  }

  return (
    <div>
        <h3 className='auth__title' >Register</h3>
        <form onSubmit={ handleRegister }>
          {
            msgError && (
              
              <div className='auth__alert-error'>
               { msgError }
              </div>

            )
            

          }
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
