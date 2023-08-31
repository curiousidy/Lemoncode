import React from 'react'
import { CharactersInterface } from '../charactersModel'
import { TableCell, TableRow } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { switchRoutes } from '../../../../core/router/routes'

interface Prop{
    character:CharactersInterface
}
const CharacterRow = ({character}) => {
    const navigate = useNavigate();
  return (
    <TableRow onClick={() => navigate(switchRoutes.rickandmortydetails, { state: character })}
    key={character.name}
    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:'pointer' }}
  >
    <TableCell align="left"><img src={character.image} width="80px" /></TableCell>
    <TableCell align="left">{character.name}</TableCell>
    <TableCell align="left">{character.species}</TableCell>
    <TableCell align="left">{character.gender}</TableCell>
  </TableRow>
  )
}

export default CharacterRow