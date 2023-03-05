import {instance} from "@/api/requests";
export async function getSetting(){
    return await instance.get('/api/setting')
}