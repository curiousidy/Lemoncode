// membersStore.ts
import { defineStore } from 'pinia';
import { MemberEntity } from 'types';

export const useMembersStore = defineStore('useMembersStore', {
  state: () => ({
    organizationName:'lemoncode',
    members:new Array()
  }),
  actions:{
      updateOrganizationName(name:string){
        this.organizationName = name;
      },
      loadMembers(members:MemberEntity[]){
          this.members = members;
      },
      updateMemberOrganizations(id:number, organizations : object[]){
          console.log('organizations', organizations)
          this.members.filter(member => member.id === id)[0].organizations = organizations
      },

  }
});
