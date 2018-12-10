<template>
    <div style="padding-top: 260px">
      <div style="font-size: 17px;text-align: left;border-bottom: solid 1px #D5D8DC;padding-bottom: 10px" >
         <span style="padding-left:20px;">
           <i class="icon-xuexi1" style="color:#808B96;padding-right: 10px"></i>我的绘本
         </span>
        <i class="icon-xiangyou" style="float: right"></i>
      </div>
      <router-link
        :to="{
          path:'accountMangement',
          params: {
            name: 'name',
            // dataObj: data
          },
          query: {
            name: 'name',
            // dataObj: data
           }
        }" style="text-decoration: none;color: #2c3e50">
            <div  style="font-size: 17px;text-align: left;margin-top: 10px;border-bottom: solid 1px #D5D8DC;padding-bottom: 10px">
                 <span style="padding-left:20px;">
                 <i class="icon-gerenzhongxin2" style="color:#808B96;padding-right: 10px"></i>账户管理
               </span>
                <i class="icon-xiangyou" style="float: right"></i>
            </div>
      </router-link>
      <!--<hr style="color: #04be02">-->
    </div>
</template>

<script>
export default {
  name: 'account'
}
</script>

<style scoped>

</style>
