import React, { useContext, useEffect } from 'react'
import { ListComponent } from './List.Component'
import { OrganizationName } from './components/OrganizationName.Component';
import OrganizationContext from '../../../core/context/organization/OrganizationContext';

import { getMembers } from '../api';
import SearchInput from '../components/SearchInput';


const ListContainer = () => {
    const { organization, updateOrganization, updateOrganizationName } = useContext(OrganizationContext);

    const loadMembers = async () => {
            updateOrganization({
                organizationName: organization.organizationName,
                members: await getMembers(organization.organizationName)
            })
    }

  useEffect(() => {
    loadMembers();  
  }, [organization.organizationName])
  
    
  return ( 
    <>
        <OrganizationName name={organization.organizationName}/>
        <SearchInput handleOrganizationName={updateOrganizationName} />
        <ListComponent members={organization.members}/>
    </>
  )
}

export default ListContainer