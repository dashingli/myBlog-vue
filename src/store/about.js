import {getAbout} from "@/api/about";
export default {
    namespaced: true,
    state:{
        loading:false,
        src:''
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload
        },
        setSrc(state,payload){
          state.src = payload
        }
    },
    actions:{
        async about(ctx){
            ctx.commit('setLoading',true)
            const res = await getAbout()
            ctx.commit('setSrc',res.data)
            ctx.commit('setLoading',false)
        }
    }
}