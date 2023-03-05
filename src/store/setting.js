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
            if(res.data.favicon){
                const link = document.createElement('link')
                link.rel = 'shortcut icon'
                link.href = res.data.favicon
                link.type = 'image/x-icon'
                document.querySelector('head').appendChild(link)
            }
        }
    }

}