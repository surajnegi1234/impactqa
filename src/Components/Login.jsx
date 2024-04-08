import React, { useState } from 'react';
import FormInput from './FormInput'
import "../Styles/signup.css";

import axios from 'axios';
const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false); 
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const inputs =[{
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    required:true,
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    required:true
  },{
    id:3,
    name:"password",
    type:"password",
    placeholder:"Password",
    required:true
  }
]
const handleChange = (e) => {
  setLoginData({ ...loginData, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:3000/login', loginData) // Assuming /login is the correct endpoint
    .then((response) => {
      if (response.data.success) {
        // Handle successful login
        setLoggedIn(true); // Set loggedIn state to true
        localStorage.setItem('loggedIn', 'true'); // Set a flag for successful login
      } else {
        setError('Invalid username or password');
      }
    })
    .catch(() => {
      setError('Invalid username or password');
    });
};

return (
  <div id='form-container'>
    {loggedIn ? (
      <p>You are already logged in!</p> // Render message if already logged in
    ) : (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {inputs.map(item => (
          <FormInput key={item.id} name={item.name} type={item.type} placeholder={item.placeholder} onChange={handleChange} />
        ))}
        {error && <p className="error">{error}</p>}
        <button id="btn" type="submit">Login</button>
      </form>
    )}
  </div>
)
}


export default Login
