
import MockAdapter from 'axios-mock-adapter'
export const mockAll = (axios) => {
    var mock = new MockAdapter(axios)
    mock.onGet("/resources/current/menus").reply(200, [
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
                                "component":'../../../views/resource/index.vue.js'
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
    mock.onGet("/resources").reply(200,{
        "content": [
            {
                "id": 1,
                "name": "系统设置",
                "url": "/system-manager",
                "code": "systemManager",
                "parentId": 0,
                "sort": 0,
                "type": "MENU",
                "createBy": 1,
                "createAt": "2018-07-17T14:38:40",
                "extensions": {
                    "icon": "setting"
                }
            },
            {
                "id": 2,
                "name": "系统管里",
                "url": "/setting",
                "code": "setting",
                "parentId": 1,
                "sort": 0,
                "type": "MENU",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:19",
                "extensions": {
                    "icon": "setting"
                }
            },
            {
                "id": 3,
                "name": "用户管理",
                "url": "/users",
                "code": "users",
                "parentId": 2,
                "sort": 0,
                "type": "MENU",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:35",
                "extensions": {
                    "icon": "user"
                }
            },
            {
                "id": 7,
                "name": "用户列表",
                "url": null,
                "code": "user-list",
                "parentId": 3,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 8,
                "name": "创建用户",
                "url": null,
                "code": "user-create",
                "parentId": 3,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 9,
                "name": "编辑用户",
                "url": null,
                "code": "user-editor",
                "parentId": 3,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 10,
                "name": "角色列表",
                "url": null,
                "code": "role-list",
                "parentId": 4,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 11,
                "name": "创建角色",
                "url": null,
                "code": "role-create",
                "parentId": 4,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 12,
                "name": "编辑角色",
                "url": null,
                "code": "role-editor",
                "parentId": 4,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 13,
                "name": "资源列表",
                "url": null,
                "code": "resources-list",
                "parentId": 5,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 14,
                "name": "创建资源",
                "url": null,
                "code": "resources-create",
                "parentId": 5,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 15,
                "name": "编辑资源",
                "url": null,
                "code": "resources-editor",
                "parentId": 5,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 16,
                "name": "部门列表",
                "url": null,
                "code": "department-list",
                "parentId": 6,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 17,
                "name": "创建部门",
                "url": null,
                "code": "department-create",
                "parentId": 6,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            },
            {
                "id": 18,
                "name": "编辑部门",
                "url": null,
                "code": "department-editor",
                "parentId": 6,
                "sort": 0,
                "type": "PERMISSION",
                "createBy": 1,
                "createAt": "2018-07-17T14:39:58",
                "extensions": null
            }
        ],
        "pageable": {
            "sort": {
                "sorted": false,
                "unsorted": true
            },
            "offset": 0,
            "pageSize": 20,
            "pageNumber": 0,
            "paged": true,
            "unpaged": false
        },
        "last": true,
        "totalElements": 15,
        "totalPages": 1,
        "number": 0,
        "size": 20,
        "sort": {
            "sorted": false,
            "unsorted": true
        },
        "numberOfElements": 15,
        "first": true
    })
    mock.onGet("/resources/tree").reply(200,[
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
                            "url": "/users",
                            "code": "users",
                            "parentId": 2,
                            "sort": 0,
                            "type": "MENU",
                            "extensions": {
                                "icon": "user"
                            },
                            "children": [
                                {
                                    "id": 7,
                                    "name": "用户列表",
                                    "url": null,
                                    "code": "user-list",
                                    "parentId": 3,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 8,
                                    "name": "创建用户",
                                    "url": null,
                                    "code": "user-create",
                                    "parentId": 3,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 9,
                                    "name": "编辑用户",
                                    "url": null,
                                    "code": "user-editor",
                                    "parentId": 3,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                }
                            ]
                        },
                        {
                            "id": 6,
                            "name": "部门管理",
                            "url": "/department",
                            "code": "department",
                            "parentId": 2,
                            "sort": 1,
                            "type": "MENU",
                            "extensions": {
                                "icon": "cluster"
                            },
                            "children": [
                                {
                                    "id": 16,
                                    "name": "部门列表",
                                    "url": null,
                                    "code": "department-list",
                                    "parentId": 6,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 17,
                                    "name": "创建部门",
                                    "url": null,
                                    "code": "department-create",
                                    "parentId": 6,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 18,
                                    "name": "编辑部门",
                                    "url": null,
                                    "code": "department-editor",
                                    "parentId": 6,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                }
                            ]
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
                                "icon": "trademark"
                            },
                            "children": [
                                {
                                    "id": 10,
                                    "name": "角色列表",
                                    "url": null,
                                    "code": "role-list",
                                    "parentId": 4,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 11,
                                    "name": "创建角色",
                                    "url": null,
                                    "code": "role-create",
                                    "parentId": 4,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 12,
                                    "name": "编辑角色",
                                    "url": null,
                                    "code": "role-editor",
                                    "parentId": 4,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                }
                            ]
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
                                "icon": "table"
                            },
                            "children": [
                                {
                                    "id": 13,
                                    "name": "资源列表",
                                    "url": null,
                                    "code": "resources-list",
                                    "parentId": 5,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 14,
                                    "name": "创建资源",
                                    "url": null,
                                    "code": "resources-create",
                                    "parentId": 5,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                },
                                {
                                    "id": 15,
                                    "name": "编辑资源",
                                    "url": null,
                                    "code": "resources-editor",
                                    "parentId": 5,
                                    "sort": 0,
                                    "type": "PERMISSION",
                                    "extensions": null,
                                    "children": null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ])
}