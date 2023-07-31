import { MemberEntity } from "types"
export const loadMembers = {
   async get() {
       const response = await fetch('https://api.github.com/orgs/lemoncode/members');
       const members = await response.json(); 
       return members as MemberEntity[]
   }

  }