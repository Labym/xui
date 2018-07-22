import {isEmpty} from 'lodash'
import Home from '../../pages/Home'
import _import from'../../_component'

export const initRoute = (router, menus) => {

}

export const initMenus = (menus) => {
    const routes = [];
    menus.forEach(menu => {
        routes.push(initMenu(menu))
    })
    return routes
}


export const initMenu = (menu) => {
    console.log('initMenu')
    const route = {
        path: menu.url,
        component(resolve) {
            if (!isEmpty(menu.extensions.component)) {
                require([`${menu.extensions.component}`], resolve)
            }
        },
        name: menu.name,
        icon: menu.extensions.icon,
        children: isEmpty(menu.children) ? [] : initMenus(menu.children)
    }

    return route;
}