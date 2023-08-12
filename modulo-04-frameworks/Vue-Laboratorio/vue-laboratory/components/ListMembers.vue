<template>
  <div>
    <h2>
      Hello from List page 
    </h2>
    
    <input v-model="organizationName" @change="handleInputUpdate" placeholder="edit me" />
    <button @click="searchUsers">Search</button>
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in membersStore.members" :key="member.id" class="member-row">
          <td><img :src="member.avatar_url" /></td>
          <td><span>{{ member.id }}</span></td>
          <td><NuxtLink :to="`/member/${member.login}`">{{ member.login }}</NuxtLink></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang='ts'>
    import { loadMembers } from '../services/members'
    import { ref } from 'vue'
    import { MemberEntity } from 'types';
    import { useMembersStore } from '../composable/membersStore'

    
    const membersStore = useMembersStore();
    const organizationName = ref(membersStore.organizationName);
    const members = ref<MemberEntity[]>(membersStore.members); 

    const handleInputUpdate = (event: Event) => {
        const newName = (event.target as HTMLInputElement).value;
        membersStore.updateOrganizationName(newName);
    };

    const searchUsers = async() => {
      membersStore.loadMembers(await loadMembers.get(membersStore.organizationName));
    }
</script>

<style lang='css' scoped>
    th {
      text-align: start;
    }
    img {
        width: 80px;
    }
</style>
