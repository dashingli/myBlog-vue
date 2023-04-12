import Mock from "mockjs";
import qs from 'querystring'
Mock.mock('/api/message','post',{
    code: 0,
    msg: "",
    data: {
        id: '@id',
            nickname: "@cname",
            content: "@cparagraph",
            createDate: Date.now(),
        "avatar":Mock.Random.image(),
            }
            })
Mock.mock(/^\/api\/message\/?(\?.+)?$/,'get',function (options){
    const query = qs.parse(options.url)
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: 52,
            [`rows|${query.limit || 10}`]: [
    {
        id: '@guid',
            nickname: "@cname",
            content: "@cparagraph(1, 10)",
            createDate: Date.now(),
        "avatar":Mock.Random.image() ,
            }
            ]
            }})
})