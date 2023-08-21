import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

const RickAndMortyDetailComponent = () => {
  const location = useLocation();
  const character = location.state;
  console.log(character)
  return (
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
  )
}

export default RickAndMortyDetailComponent