<template>
  <div>
    <h2>
      Hello from List page 
    </h2>
    
    <div class="list-user-list-container">
      <span class="list-header">Avatar</span>
      <span class="list-header">Id</span>
      <span class="list-header">Name</span>
      <div v-for="member in organization.members" :key="member.id">
        <img :src="member.avatar_url" />
        <span>{{ member.id }}</span>
        <router-link :to="`/detail/${member.login}`">{{ member.login }}</router-link>
      </div>
    </div>
    <router-link to="/detail">Navigate to detail page</router-link>
  </div>
</template>

<script setup lang='ts'>
    import { loadMembers } from '../services/members'
    const members = await loadMembers.get();
    console.log(members);
</script>

<style lang='css' scoped>
    .list-user-list-container {
        display: grid;
        grid-template-columns: 80px 1fr 3fr;
        grid-template-rows: 20px;
        grid-auto-rows: 80px;
        grid-gap: 10px 5px;
    }

    .list-user-list-container > img {
        width: 80px;
    }
</style>
