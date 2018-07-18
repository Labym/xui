import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../views/About.vue'
import Login from '../pages/login/login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [{
                path:'/test',
                name:'testaa',
                component:About
            },{
                path:'/aaaa',
                name:'aaaa',
                component:  resolve => require(['@/views/test.vue'], resolve)
            }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
