import React, { useState, useEffect} from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { ReactComponent as Logo} from './logo.svg';
import { ReactComponent as FancyImage } from './flower.svg';
import CompanyCard from './components/CompanyCard';

import './App.css';



export default function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/companies', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const users = await response.json();
        setUsers(users);
      } catch (e) {
        console.error(e);
      }
    })()
  }, []);

  return (
    <div className="App">
      <Container maxWidth='false' component='header'>
        <Box sx={{ position: 'relative', pt: '70px', mb: '90px'}}>
          <Logo />
        </Box>
      </Container>
      <Container maxWidth="false" component="main">
        <Box sx={{ p: '48px 0 72px'}}>
          <Grid container>
            <Box sx={{ width: '88px', height: '88px', backgroundColor:'#fff', borderRadius:'16px', boxShadow:'0px 4px 16px rgba(0, 0, 0, 0.25)', mr: '24px' }}>
              <FancyImage style={{
                position: 'relative',
                width: '48px',
                height: '48px',
                left: 'calc(50% - 48px/2)',
                top: 'calc(50% - 48px/2)'
              }} />
            </Box>
            <Box sx={{ p: '8px 0'}}>
              <Typography sx={{fontFamily: 'Ubuntu', mr: '30px', mb: '10px'}} variant='h5'>
                My companies
              </Typography>
              <Typography sx={{fontFamily: 'Open Sans'}} variant='caption'>
                According to the EE Business Register, the following companies are related to you.
              </Typography>
            </Box>
          </Grid>
        </Box>
        <Grid container spacing={2.25}>
          {users && users.map(user => <CompanyCard user={{ user }} key={user.id.toString()}/>)}
        </Grid>
      </Container>
    </div>
  );
};
