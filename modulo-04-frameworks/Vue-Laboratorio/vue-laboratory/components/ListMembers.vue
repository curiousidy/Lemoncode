<template>
  <div>
    <h2>
      Hello from List page 
    </h2>
    
    <input v-model="organizationName" @change="handleInputUpdate" placeholder="edit me" />
    <button @click="searchUsers">Search</button>

    <div class="list-user-list-container">
      <div class="list-header">
        <span>Avatar</span>
        <span>Id</span>
        <span>Name</span>
      </div>

      <div v-for="member in membersStore.members" :key="member.id" class="member-row">
        <img :src="member.avatar_url" />
        <span>{{ member.id }}</span>
        <NuxtLink :to="`/member/${member.id}`">{{ member.login }}</NuxtLink>
      </div>
    </div>
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
    .list-user-list-container {
        display: grid;
        grid-gap: 10px 5px;
    }

    .list-user-list-container .list-header {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px 5px;
    }

    .list-user-list-container .member-row {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-auto-rows: 80px;
        grid-gap: 10px 5px;
    }

    .list-user-list-container .member-row > img {
        width: 80px;
    }
</style>
