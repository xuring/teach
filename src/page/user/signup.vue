<template>
    <div style="padding-top: 30px">
      <group>
        <x-input title="用户名" name="username" v-model="username" placeholder="请输入姓名" ></x-input>
        <x-input title="请输入密码" type="password" placeholder="请输入密码" v-model="password" :min="6" :max="6" ></x-input>
        <x-input title="请确认密码" v-model="password2" type="password" placeholder="请再次输入密码" :equal-with="password"></x-input>
        <x-input title="邮箱" v-model="email" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
      </group>
      <div  style="margin-top: 10px">
        <el-button type="primary" v-on:click="userSignUp(username,password,password2,email)">注册</el-button>
      </div>

    </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name: 'signup',
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      username: '',
      password: '',
      password2: '',
      email: ''
    }
  },
  methods: {
    alert () {
      this.$message({
        message: '两次填写密码不一致',
        type: 'warning'
      })
    },
    userSignUp: function (uname, pword, pword2, email) {
      console.log(uname, pword, pword2, email)
      if (uname === '' || pword === '' || pword2 === '' || email === '') {
        this.$message({
          message: '不允许有空项',
          type: 'warning'
        })
      } else if (pword !== pword2) {
        this.alert()
      } else {
        let data = {
          name: uname,
          password: pword,
          email: email
        }
        this.$http.post('/local/admin/Login/signUp', data)
          .then((res) => {
            console.log(res.data)
            if (res.data.flag === 'Success') {
              this.$message({
                message: '恭喜你，注册成功',
                type: 'success'
              })
            } else if (res.data.msg === '用户名已存在') {
              this.$message.error('用户名已存在，请重填')
            } else if (res.data.msg === '邮箱已注册') {
              this.$message.error('邮箱已注册，请重填')
            }
          }, (err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
