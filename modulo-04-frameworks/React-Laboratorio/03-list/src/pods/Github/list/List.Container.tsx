import React, { useContext, useEffect } from 'react'
import { ListComponent } from './List.Component'
import axios from 'axios';
import { OrganizationName } from './components/OrganizationName.Component';
import OrganizationContext from '../../../core/context/organization/OrganizationContext';
import SearchInput from '../../../common/SearchInput';


const ListContainer = () => {
    const baseUrl = 'https://api.github.com/orgs/';
    const { organization, updateOrganization, updateOrganizationName } = useContext(OrganizationContext);

    const loadMembers = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}${organization.organizationName}/members`)
            updateOrganization({
                organizationName: organization.organizationName,
                members: data
            })

        } catch (error) {
            console.log(error)

        }
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