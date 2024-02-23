import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className='container'>
      <div className='login-box'>
        <Container maxWidth="sm">
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography variant="h5" align="center" gutterBottom>
          Chit Chat
            </Typography>
            
        <TextField
          label="Full Name"
          variant="filled"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
            />
        <TextField
          label="Username"
          variant="filled"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          />
        <TextField
          label="Password"
          variant="filled"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          fullWidth
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
            <div style={{display: "flex",justifyContent: "left"}}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gender==='male'}
                    onChange={(e) => setGender(e.target.name)}
                    name="male"
                    color="primary"
                  />
                }
                label="male"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gender==='female'}
                    onChange={(e) => setGender(e.target.name)}
                    name="female"
                    color="primary"
                  />
                }
                label="female"
                  />

            </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="success"
          size="large"
          sx={{ mt: 1 }}
        >
          SIGN UP
        </Button>
        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
          <Link href="/login" color="primary">
            Already have an account?
          </Link>
        </Typography>
        
      </form>
    </Container>
      </div>
    </div>
  );
};

export default SignUp