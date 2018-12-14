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
import editPassword from '@/page/PersonalCenter/editPassword'
import study from '@/page/StudyCenter/study'
import accountMangement from '@/page/PersonalCenter/accountMangement'
import teachDesign from '@/page/design/teachDesign'
import activitySelect from '@/page/design/activitySelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
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
    {
      path: '/editPassword',
      name: 'editPassword',
      component: editPassword
    },
    {
      path: '/accountMangement',
      name: 'accountMangement',
      component: accountMangement
    },
    {
      path: '/teachDesign',
      name: 'teachDesign',
      component: teachDesign
    },
    {
      path: '/activitySelect',
      name: 'activitySelect',
      component: activitySelect
    }
  ]
})
