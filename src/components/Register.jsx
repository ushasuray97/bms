import React, { useState } from 'react';
import { Link,Navigate,useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const Navigate = useNavigate();
  const auth = getAuth();
  
  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  //   auth.createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       // history.push('/');
  //       console.log("Registration successful");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Navigate('/login');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };
  return (
    <div className="auth__container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="auth__input-container">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="auth__input-container">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="auth__input-container">
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Log in here</Link></p>
      </form>
      
    </div>
  );
};

export default Register;
