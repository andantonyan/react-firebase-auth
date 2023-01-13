import React, {FormEvent} from 'react';
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';

function Login() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const {email, password} = document.forms[0];
    const passwordValue = password.value;
    const emailValue = email.value;

    if (emailValue && passwordValue) {
      signInWithEmailAndPassword(getAuth(), emailValue, passwordValue);
    }
  };

  return (
    <><h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input name="email"/>
        <br/>
        <input name="password" type="password"/>
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;