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
import docDetail from '@/components/doctor/detail'
import questionList from '@/components/question/detailList'
import questionDetail from '@/components/question/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {path:'/diary',component:Diary}
      ]
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
      path:'/hosDetail',
      component:hosDetail
    },
    {
      path:'/docDetail',
      component:docDetail
    },
    {
      path:'/questionList',
      component:questionList
    },
    {
      path:'/questionDetail',
      component:questionDetail
    }
  ],
  mode:"history"
})
