import {getBanner} from '@/api/banner'
export default {
    namespaced:true,
    state:{
        isLoading : true,
        apiData : []
    },
    mutations:{
        setLoading(state,payload) {
            state.isLoading = payload
        },
        setData(state,payload) {
            state.apiData = payload
        }
    },
    actions:{
        async getBanner(ctx){
            if(ctx.state.apiData.length !== 0){
                return
            }
            ctx.commit('setLoading',true)
           const res =  await getBanner()
            console.log(res)
            const data = res.data
            ctx.commit('setData',data)
            ctx.commit('setLoading',false)
            return res
        }
    }
}