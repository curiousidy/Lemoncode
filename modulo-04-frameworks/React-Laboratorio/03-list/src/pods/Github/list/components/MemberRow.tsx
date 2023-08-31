import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MemberInterface } from '../../../../core/context/organization/organizationContext'
import { switchRoutes } from '../../../../core/router/routes'
import { TableRow, TableCell } from '@mui/material'

interface Prop {
  member: MemberInterface
}
const MemberRow: FC<Prop> = ({ member }) => {
  const navigate = useNavigate();
  return (
    <TableRow onClick={() => navigate(`${switchRoutes.details.replace(":id", member.id.toString())}`, {state:member})}
      key={member.login}
      sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:'pointer' }}
    >
      <TableCell align="left"><img src={member.avatar_url} width="80px" /></TableCell>
      <TableCell align="left">{member.id}</TableCell>
      <TableCell align="left">{member.login}</TableCell>
    </TableRow>

  )
}

export default MemberRow