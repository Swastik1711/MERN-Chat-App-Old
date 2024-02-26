import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import useLogin from '../../src/hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, login }=useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login({ username, password });
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
          label="Username"
          variant="filled"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
            <div style={{display: "flex",justifyContent: "space-between"}}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    name="remember-me"
                    color="success"
                  />
                }
                label="Remember me"
                  />
              <Typography variant="body2" align="center" style={{marginTop:"15px"}}>
                <Link href="/reset-password" color="primary">
                  Forgot Password
                </Link>
              </Typography>
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
          {loading ? <CircularProgress size={"30px"}/> : "Log In"}
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Not registered?{' '}
          <Link to="/signup" color="primary">
            Create account
          </Link>
        </Typography>
        
      </form>
    </Container>
      </div>
    </div>
  );
};

export default Login