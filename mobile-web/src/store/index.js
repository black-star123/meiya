import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        username:"微信用户123",
        userhead:"@/components/assets/my/header.png",
        phonenum:"133254564564",
        Npraisenum:6666,
        Bpraiseimg:false,
        Bquestionimg:false
    },
    getters:{
        isname(state){
            return state.username
        },
        ishead(state){
            return state.userhead
        },
        praisenum(state){
            return  state.Npraisenum
        },
        praiseimg(state){
            return  state.Bpraiseimg
        },
        questionimg(state){
            return  state.Bquestionimg
        }
    },
    mutations:{
        addpraisenum(state){
            state.Npraisenum++,
            state.Bpraiseimg=true
        },
        reducepraisenum(state){
            state.Npraisenum--,
            state.Bpraiseimg=false
        },
        addquestionimg(state){
            state.Bquestionimg=true
        },
        reducequestionimg(state){
            state.Bquestionimg=false
        }
    }
})
