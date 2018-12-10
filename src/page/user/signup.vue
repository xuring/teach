<template>
    <div style="padding-top: 30px">
      <group>
        <x-input title="用户名" name="username" placeholder="请输入姓名" ></x-input>
      </group>

      <group>
        <x-input title="请输入密码" type="password" placeholder="请输入密码" v-model="password" :min="6" :max="6" @on-change="change"></x-input>
        <x-input title="请确认密码" v-model="password2" type="password" placeholder="请再次输入密码" :equal-with="password"></x-input>
      </group>

      <group>
        <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
      </group>
      <div  style="margin-top: 10px">
        <box gap="10px 10px">
          <x-button :gradients="['#1D62F0', '#19D5FD']">注册</x-button>
        </box>
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
      password: '',
      password2: ''
      // enterText: '',
      // valid1: false,
      // valid2: false,
      // iconType: '',
      // be2333: function (value) {
      //   return {
      //     valid: value === '2333',
      //     msg: 'Must be 2333'
      //   }
      // },
      // style: '',
      // disabledValue: 'hello',
      // debounceValue: '',
      // maxValue: '',
      // maskValue: '13545678910',
      // maskValue2: ''
    }
  },
  methods: {
    // getValid1 () {
    //   this.valid1 = this.$refs.input01.valid
    // },
    // getValid2 () {
    //   this.valid2 = this.$refs.input02.valid
    // },
    // change (val) {
    //   console.log('on change', val)
    // },
    // onBlur (val) {
    //   console.log('on blur', val)
    // },
    // onFocus (val, $event) {
    //   console.log('on focus', val, $event)
    // },
    // onEnter (val) {
    //   console.log('click enter!', val)
    // }
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
