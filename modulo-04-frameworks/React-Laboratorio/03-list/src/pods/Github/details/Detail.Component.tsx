import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const DetailComponent: React.FC = () => {
  const location = useLocation();
  const member = location.state;
  const navigate = useNavigate();
  console.log(member)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Hello from Detail page</h2>
      <Card sx={{ maxWidth: 345}}>
        <CardMedia
          sx={{ height: 350, width: 350, margin: '0 auto' }}
          image={member.avatar_url}
          title={member.id}
        />
        <CardContent>
          <Typography sx={{textAlign: 'center' }} gutterBottom variant="h5" component="div">
            {member.login}
          </Typography>
        </CardContent>
      </Card>
      <Button sx={{marginTop: '10px' }} variant="contained" onClick={() => navigate(-1)}>Back to list page</Button>
    </div>
  );
};
