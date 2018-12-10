<template>
    <div>
      <user-img></user-img>
      <account></account>
      <Pbottom></Pbottom>
      <!--个人中心-->
    </div>
</template>

<script>
import UserImg from './userImg'
import Account from './account'
import Pbottom from './Pbottom'
export default {
  name: 'personal',
  components: {Pbottom, Account, UserImg}
}
</script>

<style scoped>

</style>
