<template>
    <div v-if="memberEntity">
      <h2>Hello from Detail page</h2>
      <h3>User Id: {{memberEntity.id}}</h3>
      <Link to="/list">Back to list page</Link>
    </div>
</template>

<script setup lang="ts">
    import { loadMembers } from '../../services/members'
    import { MemberEntity } from '../../types'

    const route = useRoute();
    const id = route.params.memberid as string;
    const { data: memberEntity } = await useAsyncData<MemberEntity>(() =>
        loadMembers.loadMember(id)
    )
</script>