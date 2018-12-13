<!--suppress ALL -->
<template>
    <div>
      <personal-top></personal-top>
      <group>
        <x-input title="请输入原始密码：" type="password" placeholder="请输入密码" v-model="oldPassword" :min="6" :max="9"></x-input>
        <x-input title="请输入新密码：" type="password" placeholder="请输入密码" v-model="newPassword" :min="6" :max="9"></x-input>
        <x-input title="请再次输入新密码:" v-model="newPassword2" type="password" placeholder="请输入密码" :equal-with="newPassword"></x-input>
      </group>

      <div  style="margin-top: 20px">
        <el-button type="primary"  @click="editPassword(oldPassword,newPassword,newPassword2)">确定</el-button>
      </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell} from 'vux'
import PersonalTop from './personalTop'
export default {
  name: 'editPassword',
  components: {
    PersonalTop,
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      newPassword2: ''
    }
  },
  methods: {
    editPassword: function (oldPassword,newPassword,newPassword2) {
       if(oldPassword===''||newPassword===''||newPassword2===''){
         this.$message({
           message: '不允许有空项',
           type: 'warning'
         })
       }else if(newPassword===newPassword2){
         let data = {
           user:sessionStorage.getItem('user'),
           newPassword:newPassword,
           oldPassword:oldPassword
         }
         this.$http.post('/local/admin/Login/editPassword', data)
           .then((res) => {
             if (res.data.flag === 'Success') {
               this.$message({
                 message: '恭喜你，修改成功',
                 type: 'success'
               })
             } else if(res.data.msg==='原始密码不正确') {
               this.$message.error('原始密码不正确，请重填')
             }
           }, (err) => {
             console.log(err)
           })
       }else{
         this.$message({
           message: '两次填写密码不一致',
           type: 'warning'
         })
       }
    }
  }
}
</script>

<style scoped>
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
