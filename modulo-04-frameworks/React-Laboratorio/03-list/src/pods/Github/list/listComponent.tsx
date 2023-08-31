import React from "react";

import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import { MemberInterface } from "../../../core/context/organization/organizationContext";
import MemberRow from "./components/memberRow";


interface Props {
  members: MemberInterface[]
}
export const ListComponent: React.FC<Props> = ({members}) => {

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Avatar</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => <MemberRow key = {member.id} member={member}/>)}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );

  
};
