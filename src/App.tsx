import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import React from 'react';
import './App.css';
import Steps from './Steps';

const App = () => (
  <div className="App">
    <CssBaseline />
    <header className="App-header">
      <Container maxWidth="sm">
        <p>
          Royal windows
        </p>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Steps />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100%', width: '100%' }}>
              Simulator window here
            </Box>
          </Grid>
        </Grid>
      </Container>
    </header>
  </div>
)

export default App;
