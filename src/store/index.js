import Vue from 'vue';
import Vuex from 'vuex';
import banner from '@/store/banner'
Vue.use(Vuex)
const store = new Vuex.Store({
    strict:true,
    modules:{
        banner
    }
})
export default store