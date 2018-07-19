import website from '@/const/website'
import {UserActions} from "../actions"
import UserApi from '../../api/user'
import {setToken, getToken, getMenus, setMenus} from "../../common/utils/session";

const user = {
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
        [UserActions.actions.LOGIN]({commit, state, dispatch}, userInfo) {
            return new Promise((resolve, reject) => {
                UserApi.authenticate(userInfo.username, userInfo.password, userInfo.rememberMe, userInfo.captcha).then(res => {
                    const data = res.data;
                    commit(UserActions.mutations.SET_TOKEN, data);
                    dispatch(UserActions.actions.GET_MENUS);
                    setToken(data.token);
                    resolve();
                })
            })
        },

        [UserActions.actions.CAPTCHA]({commit, state, dispatch}) {
            return new Promise((resolve, reject) => {
                UserApi.captcha().then(res => {
                    const data = res.data;
                    commit(UserActions.mutations.SET_CAPTCHA, data);
                    resolve();
                })
            })
        },
        [UserActions.actions.GET_MENUS]({commit, state, dispatch}) {
            return new Promise((resolve, reject) => {
                UserApi.currentMenus().then(res => {
                    const data = res.data;
                    console.log(data)
                    commit(UserActions.mutations.SET_MENUS, data);
                    setMenus(data)
                    resolve(data);
                })
            })
        },
    },
    mutations: {
        [UserActions.mutations.SET_TOKEN]: (state, data) => {
            state.token = data.token;
        },
        [UserActions.mutations.SET_CAPTCHA]: (state, data) => {
            state.captcha = data;
        },
        [UserActions.mutations.SET_MENUS]: (state, data) => {
            console.log('SET_MENUS')
            console.log(data)
            state.menus = data;
            state.currentMenu=data[0];
        },
        [UserActions.mutations.CHANGE_CURRENT_MENU]: (state, current) => {
            state.currentMenu=current
        },

    }
}

export default user