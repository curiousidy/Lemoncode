<template>
    
      <main>
        <h2>Hello from Detail page</h2>
        <div class="card" v-if="memberEntity">
            <div class="card-image"><img :src="memberEntity.avatar_url" /></div>
            <div class="name"> <span>{{ memberEntity.name }}</span> </div>
            <div class="bio"> <span>{{ memberEntity.bio }}</span>
                <div class="email-company"> 
                    <span v-if="memberEntity.email">email:{{ memberEntity.email }}</span>
                    <span>company:{{ memberEntity.company }}</span>
                </div>
            </div>
        </div>
        <NuxtLink to="/">Back to list page</NuxtLink>
      </main>
</template>

<script setup lang="ts">
    import { loadMembers } from '../../services/members'
    import { MemberEntity } from '../../types'
    import { useMembersStore } from '../../composable/membersStore'

    const membersStore = useMembersStore();
    const route = useRoute();
    const username = route.params.memberid as string;
    const { data: memberEntity } = await useAsyncData<MemberEntity>(() =>
      loadMembers.loadMember(username)
    )

    const organizations = await useAsyncData<any>(() => 
      loadMembers.updateMemberOrganizations (memberEntity.value?.organizations_url ?? '')
    )
    if(memberEntity.value?.id){
      const id = Number(memberEntity.value?.id);
      membersStore.updateMemberOrganizations(id,organizations.data.value)
    }
      console.log(membersStore.members)
</script>

<style lang='css' scoped>

main{
    text-align: center;
}
.card {
  width: 50%;
  background: rgb(210, 235, 201);
  padding: .4em;
  border-radius: 6px;
  margin: 0 auto;
}

.card-image {
  width: 100%;
  height: 50%;
  border-radius: 6px 6px 0 0;
  display: flex;
  justify-content: center;
}

.card-image > img {
    width: 20%;
}

.card-image:hover {
  transform: scale(0.98);
}

.name {
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 600;
  color: rgb(63, 121, 230);
  padding: 10px 7px 0;
  text-align: center;
}

.bio {
  font-weight: 600;
  font-size: 1,7em;
  color: rgb(88, 87, 87);
  padding: 7px;
}

.email-company {
  color: gray;
  font-weight: 400;
  font-size: 15px;
  padding-top: 20px;
}
</style>