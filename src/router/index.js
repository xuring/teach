import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/HomePage/Home'
// import imgSwiper from '@/page/HomePage/imgSwiper'
// import photo from '@/page/PersonalCenter/photo'
// import topText from '@/page/HomePage/topText'
// import start from '@/page/HomePage/start'
// import bottom from '@/page/bottom'
import userLog from '@/page/user/userLog'
import personal from '@/page/PersonalCenter/personal'
import study from '@/page/StudyCenter/study'
import accountMangement from '@/page/PersonalCenter/accountMangement'
import teachingProcess from '@/page/design/teachingProcess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userLog',
      name: 'userLog',
      component: userLog
    },
    // {
    //   path: '/',
    //   name: 'topText',
    //   component: topText
    // },
    // {
    //   path: '/',
    //   name: 'imgSwiper',
    //   component: imgSwiper
    // },
    // {
    //   path: '/',
    //   name: 'photo',
    //   component: photo
    // },
    // {
    //   path: '/',
    //   name: 'start',
    //   component: start
    // },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    // {
    //   path: '/',
    //   name: 'bottom',
    //   component: bottom
    // },
    {
      path: '/accountMangement',
      name: 'accountMangement',
      component: accountMangement
    },
    {
      path: '/teachingProcess',
      name: 'teachingProcess',
      component: teachingProcess
    }
  ]
})
