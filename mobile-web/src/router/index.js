import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import City from '@/components/home/city'
import My from '@/components/my/unlisted'
import Question from '@/components/question/index'
import Search from '@/components/search/index'
import Hospital from '@/components/hospital/index'
import Doctor from '@/components/doctor/index'
import Case from '@/components/case/index'
import Diary from '@/components/common/diary'
import hosDetail from '@/components/hospital/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/hospital',
      component: Hospital,
    },
    {
      path: '/doctor',
      component: Doctor
    },
    {
      path: '/question',
      component:Question
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/case',
      component:Case
    },
    {
      path:'/diary',
      component:Diary
    }
  ],
  mode:"history"
})
