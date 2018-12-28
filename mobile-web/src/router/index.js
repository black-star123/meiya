import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import City from '@/components/home/city'
import My from '@/components/my/login'
import Unlisted from '@/components/my/unlisted'
import Question from '@/components/question/index'
import Search from '@/components/search/index'
import Hospital from '@/components/hospital/index'
import Doctor from '@/components/doctor/index'
import Case from '@/components/case/index'
import Diary from '@/components/common/diary'
// import doctorcommon from '@/components/common/doctor'
// import hospitalcommon from '@/components/common/hospitalList'
// import questioncommon from '@/components/question/index'
import hosDetail from '@/components/hospital/detail'
import docDetail from '@/components/doctor/detail'
import questionList from '@/components/question/detailList'
import questionDetail from '@/components/question/detail'
import list from '@/components/search/list'
import sorry from '@/components/search/404'
import ideas from "@/components/my/ideas"


Vue.use(Router)


Router.prototype.goback=function(){
  this.isback=true,
  window.history.go(-1)     
}

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
      component: City,
      meta:{
        title:"地区选择"
      }
    },
    {
      path: '/my',
      component: My,
      meta:{
        title:"我的"
      }
    },
    {
      path:'/ideas',
      component:ideas,
      meta:{
        title:"意见反馈"
      }
    },
    {
      path: '/unlisted',
      component: Unlisted,
      meta:{
        title:"我的"
      }
    },
    {
      path: '/hospital',
      component: Hospital,
      meta:{
        title:"医院列表"
      }
    },
    {
      path: '/doctor',
      component: Doctor,
      meta:{
        title:"医生列表"
      }
    },
    {
      path: '/question',
      component:Question,
      meta:{
        title:"美丽问答"
      }
    },
    {
      path:'/search',
      name:"search",
      component:Search,
      meta:{
        title:"搜索"
      }
    },
    {
      path:'/case',
      component:Case,
      meta:{
        title:"案例详情"
      }
    },
    {
      path:'/hosDetail',
      component:hosDetail,
      meta:{
        title:"医院主页"
      }
    },
    {
      path:'/docDetail',
      component:docDetail,
      meta:{
        title:"医生介绍"
      }
    },
    {
      path:'/questionList',
      component:questionList,
      meta:{
        title:"问题详情"
      }
    },
    {
      path:'/questionDetail',
      component:questionDetail,
      meta:{
        title:"回答详情"
      }
    },
    {
      path:'/list/:messge/:error',
      name:"list",
      component:list,
      meta:{
        title:"美丫搜索"
      },
      children:[
        {path:'sorry',name:"sorry",component:sorry,meta:{title:"美丫搜索"}},
        // {path:'diary',name:"diarycommon",component:Diary,meta:{title:"美丫搜索"}},
        // {path:'doctorcommon',name:"doctorcommon",component:doctorcommon,meta:{title:"美丫搜索"}},
        // {path:'questioncommon',name:"questioncommon",component:questioncommon,meta:{title:"美丫搜索"}},
        // {path:'hospitalcommon',name:"hospitalcommon",component:hospitalcommon,meta:{title:"美丫搜索"}},
      ]
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
     return savedPosition
    } else {
     return { x: 0, y: 0 }
    }
    },
  mode:"history"
})
