<template>
  <div>
    <design-top></design-top>
    <teaching-process></teaching-process>
  </div>
</template>

<script>
import TeachingProcess from './teachingProcess'
import DesignTop from './designTop'
export default {
  name: 'teachDesign',
  components: {DesignTop, TeachingProcess}
}
</script>

<style scoped>

</style>
