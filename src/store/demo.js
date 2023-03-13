import {getDemo} from "@/api/demo";
export default {
    namespaced: true,
    state:{
        data:[],
        isLoading:false
    },
    mutations:{
        setDate(state,payload){
            state.data = payload
        },
        setLoading(state,payload){
            state.isLoading = payload
        }
    },
    actions:{
        async getDate(ctx){
            if(ctx.state.data.length !== 0){
                return
            }
            ctx.commit('setLoading',true)
            const res = await getDemo()
            const data = res.data
            ctx.commit('setDate',data)
            ctx.commit('setLoading',false)
        }
    }
}