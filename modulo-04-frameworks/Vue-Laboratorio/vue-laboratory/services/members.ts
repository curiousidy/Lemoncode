import { MemberEntity } from "types"
export const loadMembers = {
   async get(organization:string) {
       try{
           const response = await fetch(`https://api.github.com/orgs/${organization}/members`);
           if(!response.ok) throw new Error('Error fetching members data');
           const members = await response.json(); 
           return members as MemberEntity[];
       }catch(error){
           window.alert('Hubo un error al obtener los datos de los miembros.');
           return [];
       }
   },

    async loadMember(id:string) {
        const response = await fetch(`https://api.github.com/user/${id}`);
        const member = await response.json(); 
        console.log(member);
        return member as MemberEntity
    } 
}