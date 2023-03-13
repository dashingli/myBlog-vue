import {instance} from "@/api/requests";
/*
* 获取所有项目
* */
export async function getDemo(){
    return await instance.get('/api/project')
}