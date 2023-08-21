import React from "react";
import MemberRow from "./components/MemberRow";
import { MemberInterface } from "../../../core/context/organization/OrganizationContext";

interface Props {
  members: MemberInterface[]
}
export const ListComponent: React.FC<Props> = ({members}) => {

  return (
    <>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => <MemberRow member={member}/>)}
      </div>
    </>
  );

  
};
