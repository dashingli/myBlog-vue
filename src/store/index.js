import Vue from 'vue';
import Vuex from 'vuex';
import banner from '@/store/banner'
import setting from "@/store/setting";
import about from "@/store/about";
Vue.use(Vuex)
const store = new Vuex.Store({
    strict:true,
    modules:{
        banner,
        setting,
        about
    }
})
export default store