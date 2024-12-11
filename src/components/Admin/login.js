import React, { useState } from 'react';
import img3 from '../data/logo.png'
import {Link} from 'react-router-dom'
import MealsSevies from './MealsSevies';


function Admin() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = () => {
      // Define the allowed users
      const allowedUsers = [
        { email: 'Moha@gmail.com', password: '123' },
        { email: 'Zak@gmail.com', password: '123' },
      ];
      // Check if the entered email and password match any of the allowed users
      const user = allowedUsers.find((user) =>
       user.email === email && user.password === password
      );

      if (user) {
        // Set the logged-in state to true
        setLoggedIn(true);
      } else {
        // Display an error message
        setErrorMessage('Invalid email or password.');
      }
    };
    
    if (loggedIn) {
      // Render the admin page if logged in
      return <MealsSevies/>;
    }
  
    return (
      <>
        <nav class='navbar'>
        <Link class='link' to="/home">
            <button class="btn btn-warning rounded-lg"><i class="bi bi-box-arrow-left"></i></button>
        </Link>
        </nav>
        <div class='container' id="form-container">
        <p class="title-admin">Admin Login</p>
        <img src={img3} alt='' style={{width:'100px',height:'100px'}}/>
        <p style={{color:'yellow'}}>{errorMessage}</p>
            <form class="form">
                <div class="input-group">
                <label for="username">Email :</label>
                    <input type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="username" />
                </div>
                <div class="input-group">
                <label for="password">Password :</label>
                    <input type="password"  
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    id="password" />
                </div>
                <button class="sign" onClick={handleLogin}>Sign in</button>
            </form>
        </div> 
   
      </>
    );
  }

  export default Admin;