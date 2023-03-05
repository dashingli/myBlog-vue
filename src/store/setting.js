import {getSetting} from '@/api/setting'

export default {
    namespaced:true,
    state:{
        data:{}
    },
    mutations:{
      setDate(state,payload){
          state.data = payload
      }
    },
    actions:{
        async getDate(ctx){
            const res = await getSetting()
            ctx.commit('setDate',res.data)
        }
    }

}