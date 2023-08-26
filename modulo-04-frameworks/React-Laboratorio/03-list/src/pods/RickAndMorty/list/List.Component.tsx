import React, { FC, useState } from 'react'
import { CharactersInterface } from './characters.model'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { switchRoutes } from '../../../core/router/Routes'
import { useNavigate } from 'react-router-dom'

interface Props {
  characters: CharactersInterface[]
}

const rowsPerPageOptions = [5, 10, 25];

const RickAndMortyListComponent: FC<Props> = ({ characters }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedMembers = characters.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );


  return (
    <div>
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
            {displayedMembers.map((character) => (

              <TableRow onClick={() => navigate(switchRoutes.rickandmortydetails, { state: character })}
                key={character.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:'pointer' }}
              >
                <TableCell align="left"><img src={character.image} width="80px" /></TableCell>
                <TableCell align="left">{character.name}</TableCell>
                <TableCell align="left">{character.species}</TableCell>
                <TableCell align="left">{character.gender}</TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={characters.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default RickAndMortyListComponent