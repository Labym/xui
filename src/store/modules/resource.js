import {ResourceActions} from "../actions"
import ResourceApi from '../../api/resource'
import {setToken, getToken, getMenus, setMenus} from "../../common/utils/session";

const resource = {
    state: {
        userInfo: {
            username: 'Flood',
            avatar: 'static/img/1299118.jpg'
        },
        captcha: {},
        token: getToken(),
        menus: getMenus(),
        currentMenu:{}
    },
    actions: {
        [ResourceActions.actions.LIST]({commit, state, dispatch}) {
            return new Promise((resolve, reject) => {
                ResourceApi.list().then(res =>{
                    resolve(res.data);
                })
            })
        },

    },
    mutations: {

    }
}

export default resource