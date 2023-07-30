import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../../common/SearchInput";
import OrganizationContext from "../../core/context/organization/OrganizationContext";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}
const baseUrl = 'https://api.github.com/orgs/';

export const ListComponent: React.FC = () => {
  
  const {organization,updateOrganization,updateOrganizationName} = useContext(OrganizationContext);

  const loadMembers = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}${organization.organizationName}/members`)
      updateOrganization({
        organizationName:organization.organizationName,
        members:data
      })

    } catch (error) {
      console.log(error)

    }
  }

  React.useEffect(() => {
    loadMembers();
  }, [organization.organizationName]);

  return (
    <>
      <h2>Hello from List page
        {organization.organizationName}
      </h2>
      <SearchInput handleOrganizationName={updateOrganizationName} />
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {organization.members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
