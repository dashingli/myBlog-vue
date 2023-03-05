import {instance} from "@/api/requests.js";
export async function getSetting(){
    return await instance.get('/api/setting')
}