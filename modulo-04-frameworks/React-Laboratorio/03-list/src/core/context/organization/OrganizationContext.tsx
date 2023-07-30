import { createContext } from "react";

export interface OrganizationContextInterface {
    organization:OrganizationInterface;
    updateOrganization:(organization:OrganizationInterface) => void;
    updateOrganizationName: (organizationName:string) => void;
};
export interface OrganizationInterface{
    organizationName:string;
    members:MemberInterface[];
}
export interface MemberInterface{
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
}

const OrganizationContext = createContext({} as OrganizationContextInterface)
OrganizationContext.displayName = 'Organization Context';
export default OrganizationContext;