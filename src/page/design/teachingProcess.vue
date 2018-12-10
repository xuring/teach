<template>
    <div>
      <!--&lt;!&ndash; 调用组件  &ndash;&gt;-->
      <!--<draggable element="ul" v-model="list">-->
        <!--<li v-for="item in list">{{item.name}}</li>-->
      <!--</draggable>-->
      <!--&lt;!&ndash; 输出list数据 &ndash;&gt;-->
      <!--{{list}}-->
    </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'teachingProcess',
  components: {
    // 调用组件
    draggable
  },
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
