import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import './App.css';


const App = () => {
  const[password, setPassword] = useState('');
  const[weak, setWeak] = useState(false);
  const[stronger, setStronger] = useState(false);
  const[strong, setStrong] = useState(false);

  useEffect(() => {
    setWeak(false);
    setStronger(false);
    setStrong(false);

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

    if (counter === 1) {
      setWeak(true);
    } else if (counter === 2) {
      setStronger(true);
    } else if (counter >= 3) {
      setStrong(true);
    }
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
        {weak && <Alert severity="error">Weak password!</Alert>}
        {stronger && <Alert severity="error">Could be stronger!</Alert>}
        {strong && <Alert severity="success">Strong Password!</Alert>}
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
