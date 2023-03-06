import {instance} from "@/api/requests";
export async function getAbout(){
    return instance.get('/api/about')
}