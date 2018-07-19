
import MockAdapter from 'axios-mock-adapter'
export const mockAll = (axios) => {
    var mock = new MockAdapter(axios)
    mock.onGet("/menus/current").reply(200, [
        {
            "id": 1,
            "name": "系统设置",
            "url": "/system-manager",
            "code": "systemManager",
            "parentId": 0,
            "sort": 0,
            "type": "MENU",
            "extensions": {
                "icon": "setting"
            },
            "children": [
                {
                    "id": 2,
                    "name": "系统管里",
                    "url": "/setting",
                    "code": "setting",
                    "parentId": 1,
                    "sort": 0,
                    "type": "MENU",
                    "extensions": {
                        "icon": "setting"
                    },
                    "children": [
                        {
                            "id": 3,
                            "name": "用户管理",
                            "url": "/test",
                            "code": "users",
                            "parentId": 2,
                            "sort": 0,
                            "type": "MENU",
                            "extensions": {
                                "icon": "user",
                                "component":'./views/resource/index'
                            },
                            "children": []
                        },
                        {
                            "id": 6,
                            "name": "部门管理",
                            "url": "/aaaa",
                            "code": "department",
                            "parentId": 2,
                            "sort": 1,
                            "type": "MENU",
                            "extensions": {
                                "icon": "cluster",
                                "component":'./views/resource/index'
                            },
                            "children": []
                        },
                        {
                            "id": 4,
                            "name": "角色管理",
                            "url": "/roles",
                            "code": "roles",
                            "parentId": 2,
                            "sort": 2,
                            "type": "MENU",
                            "extensions": {
                                "icon": "trademark",
                                "component":'./views/resource/index'
                            },
                            "children": []
                        },
                        {
                            "id": 5,
                            "name": "资源管理",
                            "url": "/resources",
                            "code": "resources",
                            "parentId": 2,
                            "sort": 3,
                            "type": "MENU",
                            "extensions": {
                                "icon": "table",
                                "component":'../../views/resource/index.vue'
                            },
                            "children": []
                        }
                    ]
                }
            ]
        }
    ])
    mock.onPost("/authenticate").reply(200, {
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhLmNvbSIsImF1dGgiOiJBRE1JTiIsImZsb29kX2lkIjoiNzU1ZmVjYzAzYWIzZmIzOCIsImV4cCI6MTUzNDUxMDgwN30.hPwIfDqGoLf52eHVZKWQWDPYhd-mEh4JPahKYVJT8SHRkilk-iHQ1qNbG0j1sJ9nit-nLd1d24ZejJqhscdusw"
    })
}