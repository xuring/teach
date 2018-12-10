<template>
    <div>
        <personal-top></personal-top>
        <logout></logout>
    </div>
</template>

<script>
import PersonalTop from './personalTop'
import Logout from "./logout";
export default {
  name: 'accountMangement',
  components: {
    Logout,
    PersonalTop}
  // data () {
  //   return {
  //
  //   }
  // },
  // methods: {
  //   logoutUser(){
  //
  //   }
}
</script>

<style scoped>

</style>
