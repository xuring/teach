<template>
  <div>
    <design-top></design-top>
    <content-select></content-select>
  </div>
</template>

<script>
import DesignTop from "./designTop";
import ContentSelect from "./contentSelect";
export default {
  name: 'activitySelect',
  components: {ContentSelect, DesignTop},
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>
