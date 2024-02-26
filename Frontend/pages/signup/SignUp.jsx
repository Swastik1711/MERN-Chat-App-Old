import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import useSignup from '../../src/hooks/useSignup';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  };

  return (
    <div className='container'>
      <div className='login-box'>
        <Container maxWidth="sm">
      <form onSubmit={handleSubmit} >
        <Typography variant="h5" align="center" gutterBottom>
          Chit Chat
            </Typography>
            
        <TextField
          label="Full Name"
          variant="filled"
          fullWidth
          margin="normal"
          value={inputs.fullName}
          onChange={(e) => setInputs({...inputs,fullName: e.target.value})}
          required
            />
        <TextField
          label="Username"
          variant="filled"
          fullWidth
          margin="normal"
          value={inputs.username}
          onChange={(e) => setInputs({...inputs,username: e.target.value})}
          required
          />
        <TextField
          label="Password"
          variant="filled"
          fullWidth
          margin="normal"
          type="password"
          value={inputs.password}
          onChange={(e) => setInputs({...inputs,password: e.target.value})}
          required
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          fullWidth
          margin="normal"
          type="password"
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
          required
        />
            <div style={{display: "flex",justifyContent: "left"}}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inputs.gender==='male'}
                    onChange={(e) => setInputs({...inputs,gender: e.target.name})}
                    name="male"
                    color="primary"
                  />
                }
                label="male"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inputs.gender==='female'}
                    onChange={(e) => setInputs({...inputs,gender: e.target.name})}
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
          disabled={loading}
        >
          {loading ? <CircularProgress size={"30px"}/> : "Sign Up"}
        </Button>
        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
          <Link to="/login" color="primary">
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