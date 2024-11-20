import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.85)', 
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign Up for Flight Buddy
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                style: { fontSize: 18 }, // Increase font size for the input text
              }}
              InputLabelProps={{
                style: { fontSize: 18 }, // Increase font size for the label
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                style: { fontSize: 18 }, // Increase font size for the input text
              }}
              InputLabelProps={{
                style: { fontSize: 18 }, // Increase font size for the label
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputProps={{
                style: { fontSize: 18 }, // Increase font size for the input text
              }}
              InputLabelProps={{
                style: { fontSize: 18 }, // Increase font size for the label
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Already a user?{' '}
            <Link component="button" variant="body2" onClick={() => navigate('/login')}>
              Click here to login
            </Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default SignupPage;
