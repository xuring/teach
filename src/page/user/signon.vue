<template>
    <div style="padding-top: 30px">
      <group >
        <x-input title="账户" name="username" v-model="user" placeholder="请输入用户名或邮箱" ></x-input>
        <x-input title="密码" type="password" placeholder="请输入密码" v-model="password" :min="6" :max="6" ></x-input>
      </group>
     <div  style="margin-top: 20px">
        <el-button type="primary"  @click="userSignon(user,password)">登录</el-button>
      </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  name: 'signonstyle',
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    userSignon: function (user, pword) {
      console.log(user, pword)
      let data = {
        user: user,
        password: pword
      }
      this.$http.post('/local/admin/Login/getlogin', data)
        .then((res) => {
          if (res.data.flag === 'Success') {
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            })
            sessionStorage.setItem('user', user)
            this.$router.push({path: '/Home', query: {user: user}})
          } else {
            this.$message.error('用户名或密码错误，请重填')
          }
        }, (err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
