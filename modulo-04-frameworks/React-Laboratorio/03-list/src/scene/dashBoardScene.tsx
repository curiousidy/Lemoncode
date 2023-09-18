import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../core/router/routes';

const DashBoardScene = () => {
    const navigate = useNavigate();
    const handleClickGitHub = () => navigate(routes.githubexample)
    const handleClickRickMorty = () => navigate(routes.rickandmorty)
    
  return (
        <div style={{ margin: '0 auto', display: 'table' }}>
            <Button variant="text" onClick={handleClickGitHub}>Github example</Button>
            <Button variant="text" onClick={handleClickRickMorty}>Rick and Morty example</Button>    
        </div>
    )
}

export default DashBoardScene