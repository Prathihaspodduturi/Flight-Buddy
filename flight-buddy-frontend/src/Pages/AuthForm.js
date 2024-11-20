import React from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ title, buttonLabel, linkText, linkPath, onSubmit, fields }) => {
  const navigate = useNavigate();

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
            {title}
          </Typography>
          <form onSubmit={onSubmit}>
            {fields.map((field, index) => (
              <TextField
                key={index}
                margin="normal"
                fullWidth
                label={field.label}
                type={field.type}
                value={field.value}
                onChange={field.onChange}
                required={field.required}
                InputProps={{
                  style: { fontSize: 18 }, // Increase font size for the input text
                }}
                InputLabelProps={{
                  style: { fontSize: 18 }, // Increase font size for the label
                }}
              />
            ))}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              {buttonLabel}
            </Button>
          </form>
          <Typography variant="body2" sx={{ mt: 2 }}>
            {linkText}{' '}
            <Link component="button" variant="body2" onClick={() => navigate(linkPath)}>
              Click here
            </Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default AuthForm;
