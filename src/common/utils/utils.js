import {isEmpty} from 'lodash'

export const importComponent=(path,resolve) => {
   return require([`@${path}.vue`], resolve)
}

export const initMenus = (menus) => {
    const routes = []
    menus.forEach(menu => {
        routes.push(initMenu(menu))
    })

    return routes;
}


export const initMenu = (menu) => {
    const route = {
        path: path,
        component: resolve => importComponent('/views/test',resolve),
        name: menu.name,
        icon: menu.extensions.icon,
        children: isEmpty(menu.children) ? [] : initMenus(children)
    }

    return route;
}