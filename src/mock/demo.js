import Mock from "mockjs";
Mock.mock('/api/project','get',{
    code: 0,
    msg: "",
    "data|10-33": [
        {
            id: '@uuid',
                name: '@title(5,15)',
                url: '@url',
                'github|1': ['@url',null],
                'description|1-4': ['@paragraph(1)'],
                thumb: "@image('250x200', '#50B347', '#FFF', 'Mock.js')"
                },]
                })