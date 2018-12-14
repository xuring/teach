<template>
    <div>
      <h1>Vue Dragable</h1>

      <div class="drag">
        <h2>List 1 v-dragable-for</h2>
        <draggable id="list1" :list="list1" class="dragArea" :options="{draggable:'.item-d', group:{name:'people'}}" @change="log">
          <div v-for="(element, index) in list1"  :key="index" class="item-d">
            {{element.name}} {{index}}
          </div>
          <div slot="header">
            Header here
          </div>
        </draggable>

        <h2>List 2 v-dragable-for</h2>
        <draggable id="list2" :list="list2" class="dragArea" :options="{draggable:'.item-d',group:'people'}" @change="log">
          <div v-for="(element, index)  in list2"  :key="index" class="item-d">{{element.name}}</div>
        </draggable>
      </div>

      <div class="normal">
        <h2>List 1 v-for</h2>
        <div>
          <div v-for="(element, index) in list1" :key="index">{{element.name}}</div>
        </div>

        <h2>List 2 v-for</h2>
        <div>
          <div v-for="(element, index) in list2" :key="index">{{element.name}}</div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "clone"
    }
</script>

<style scoped>

</style>
