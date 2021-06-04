import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import './App.css';
import PasswordStrength from './components/PasswordStrength';


const App = () => {
  const[password, setPassword] = useState('');
  const[counter, setCounter] = useState(0);

  useEffect(() => {
    let counter = 0;
    if (password.length >= 5) {
      counter++;
    }
    if (password.toUpperCase() !== password) {
      counter++;
    }
    if (password.toLowerCase() !== password) {
      counter++;
    }
    if (/\d/g.test(password) === true) {
      counter++;
    }
    setCounter(counter);

  }, [password])

  return (
    <div className="container">
      <div className="app">
        <h1>Password Validation</h1>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <PasswordStrength counter={counter}/>
        {counter===1 && <Alert severity="error">Weak password!</Alert>}
        {counter===2 && <Alert severity="error">Could be stronger!</Alert>}
        {counter>=3 && <Alert severity="success">Strong Password!</Alert>}
      </div>
      <h2>Password Requirements</h2>
        <ul>
          <li>The password contains at least 5 characters</li>
          <li>The password contains at least 1 number</li>
          <li>The password contains an uppercase letter</li>
          <li>The password contains a lowercase letter</li>
        </ul>
        <p>A weak password meets 1 requirement</p>
        <p>A stronger password meets 2 requirements</p>
        <p>A strong password meets at least 3 requirements</p>
    </div>
  );
}

export default App;
