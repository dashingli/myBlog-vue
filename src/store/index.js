import Vue from 'vue';
import Vuex from 'vuex';
import banner from '@/store/banner'
import setting from "@/store/setting";
Vue.use(Vuex)
const store = new Vuex.Store({
    strict:true,
    modules:{
        banner,
        setting
    }
})
export default store