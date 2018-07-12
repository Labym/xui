import router from './router'
import NProgress from 'nprogress' // progress bar
import store from '../store'
import 'nprogress/nprogress.css'// progress bar style


router.beforeEach((to, from, next) => {

    console.log(to)

    NProgress.start() // start progress bar
    // const value = to.query.src ? to.query.src : to.path;
    // const label = to.query.name ? to.query.name : to.name;
    // if (store.getters.website.whiteList.indexOf(value) == -1) {
    //     store.commit('ADD_TAG', {
    //         label: label,
    //         value: value,
    //         query: to.query
    //     });
    // }
    if (to.path === '/login'&&!store.getters.token){
        next()
    }

    if (store.getters.token) { // determine if there has token
        /* has token*/
        if (to.path === '/login') {
            next({path: '/'})
            NProgress.done()
        } else {
            next()
            NProgress.done()
        }
    } else {
        /* has no token*/
        next('/login')
        NProgress.done();
    }
})