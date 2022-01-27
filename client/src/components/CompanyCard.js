import React, { useState } from 'react';
import { Grid, Typography, CardContent, Button, CardActions} from '@mui/material';
import { styled } from '@mui/system';


export default function CompanyCard(props) {
  // console.log(props);
  const [added, setAdded] = useState(false);
  const MyCard = styled('div')({
    // width: 'auto',
    height: '168px',
    color: '#000',
    border: '2px solid #ffffff',
    boxShadow: '0px 0px 8px rgba(196, 196, 196, 0.25)',
    borderRadius: '16px',
    justifyContent: 'start',
    padding: '24px',
    boxSizing:'border-box'
  });
  const addToSystem = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const status = await response.status;
      console.log('Response status code: ' + status);
    } catch (e) {
      console.error(e);
    }
  }
  const handleClick = () => {
    const data = props.user.user;
    console.log('Sending data: \n', data);
    addToSystem(data);
    setAdded(true);
  }
  
  return (
    <Grid item xl={3} lg={3} md={4} xs={6}>
      <MyCard className={added ? 'added-card' : 'not-added-card'}>
        <CardContent sx={{p: '0'}}>
          <Typography sx={{ fontFamily: 'Ubuntu'}} variant='h5' component='h2' align='left'>
            {props.user.user.name}
          </Typography>
          <Typography sx={{ fontFamily: 'Open Sans', mb: '24px' }} variant='body2' align='left'>
            Reg.nr: {props.user.user.regnum}
          </Typography>
        </CardContent>
        <CardActions sx={{p: '0'}}>
          {!added ? <Button sx={{ fontFamily: 'Ubuntu', p: '0', fontSize: '12px', color: '#1445F5' }} onClick={handleClick} variant="text">Add to system</Button> : <></>}
        </CardActions>
      </MyCard>
    </Grid>
  )
  
}