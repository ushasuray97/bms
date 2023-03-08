import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import firebase,{auth} from "../firebase";
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginForm = ({setUser,setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const Navigate = useNavigate();
  // const auth = getAuth();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        setUser(user);
        setIsLoggedIn(true);
        Navigate('/');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Login</button>
        <p>Dont have an account <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
