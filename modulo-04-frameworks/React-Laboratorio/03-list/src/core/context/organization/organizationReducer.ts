import { OrganizationInterface } from "./organizationContext"

type organizationActions = 
  | {type:'update', payload:OrganizationInterface}
  | {type:'changeName', payload:string}

export const organizationReducer = (state:OrganizationInterface,action:organizationActions):OrganizationInterface =>{
    switch (action.type) {
        case 'update':
            return action.payload
        case 'changeName':
            return {
                ...state,
                organizationName:action.payload
            }
        default:
            return state;
    }
}