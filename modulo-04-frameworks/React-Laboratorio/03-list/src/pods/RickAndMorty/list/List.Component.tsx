import React, { FC } from 'react'
import { CharactersInterface } from './characters.model'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { switchRoutes } from '../../../core/router/Routes'
import { useNavigate } from 'react-router-dom'

interface Props{
  characters:CharactersInterface[]
}

const RickAndMortyListComponent:FC<Props> = ({characters}) => {
  const navigate = useNavigate();
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Species</TableCell>
            <TableCell align="left">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => (
     
            <TableRow onClick = {() => navigate(switchRoutes.rickandmortydetails, {state:character})}
                key={character.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left"><img src={character.image} width="80px"/></TableCell>
                <TableCell align="left">{character.name}</TableCell>
                <TableCell align="left">{character.species}</TableCell>
                <TableCell align="left">{character.gender}</TableCell>
              </TableRow>
        
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RickAndMortyListComponent