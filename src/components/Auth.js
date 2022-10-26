import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import {useState} from 'react'
import classes from './Auth.module.css';

const Auth = () => {
const dispatch = useDispatch();
const [enteredEmail, setEnteredEmail] = useState('')
const [enteredPassword, setEnteredPassword] = useState('')

const validateEmail = () => {
return enteredEmail.trim().contains('@.');
};
const validatePassword = () => {
  return enteredPassword.trim().length >= 6;
}

const emailHandler = (event) => {
  setEnteredEmail(event.target.value);
}
const passwordHandler = (event) => {
  setEnteredPassword(event.target.value);
}

  const formSubmitHandler = (event) =>{
    event.preventDefault();
     dispatch(authActions.login())
  
   return
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={emailHandler}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={passwordHandler}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
