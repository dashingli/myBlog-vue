import {instance} from "@/api/requests";

/**
 * 提交留言
 * @param nickname
 * @param content
 * @returns {Promise<*>}
 */
export async function postMsg(nickname,content){
    return await instance.post('/api/message',{
        nickname,
        content
    })
}

export async function getMsg(page=1,limit=10){
    return await instance.get('/api/message',{params:{
        page,
        limit
    }})
}