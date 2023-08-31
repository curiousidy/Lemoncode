import React, { FC, useReducer } from 'react'
import OrganizationContext, { OrganizationInterface } from './organizationContext';
import { organizationReducer } from './organizationReducer';
interface Props {
    children: JSX.Element;
}
const OrganizationProvider:FC<Props> = ({children}) => {
  const initValue:OrganizationInterface = {
    organizationName:'lemoncode',
    members:[]
  }
  const [state, dispatch] = useReducer(organizationReducer, initValue)
  
  const updateOrganization = (organization:OrganizationInterface) => {
    dispatch({type:'update',payload:organization})
  }

  const updateOrganizationName = (organizationName:string) => {
    dispatch({type:'changeName',payload:organizationName})
  }

  return (
    <OrganizationContext.Provider value={{
      organization:state,
      updateOrganization,
      updateOrganizationName
    }}>
        {children}
    </OrganizationContext.Provider>
  )
}

export default OrganizationProvider