import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const RickAndMortyDetailComponent = () => {
  const location = useLocation();
  const character = location.state;
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    
      <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
        <CardMedia
          sx={{ height: 350, width: 350,  margin: '0 auto' }}
          image={character.image}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <span>
              <strong>Gender:</strong>
              {character.gender}
            </span>
            <span>
              <strong>Species:</strong>
              {character.species}
            </span>
            <span>
              <strong>Status:</strong>
              {character.status}
            </span>
            <span>
              <strong>Location:</strong>
              {character.location.name}
            </span>
            <span>
              <strong>Created:</strong>
              {character.created}
            </span>
          </Typography>
        </CardContent>
      </Card>
      <Button sx={{marginTop: '10px' }} variant="contained" onClick={() => navigate(-1)}>Back to list page</Button>
    
    </div>
  )
}

export default RickAndMortyDetailComponent