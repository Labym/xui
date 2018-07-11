import website from '@/const/website'
import {UserActions} from "../actions"
import UserApi from '../../api/user'

const user = {
    state: {
        isCollapse: false,
        isFullScreen: false,
        website: website,
    },
    actions: {
        [UserActions.actions.LOGIN]({commit, state, dispatch}, userInfo) {

            return new Promise((resolve, reject) => {
                UserApi.authenticate(userInfo.username, userInfo.password, userInfo.rememberMe, userInfo.captcha).then(res => {
                    const data = res.data;
                    commit('SET_TOKEN', data);
                    commit('DEL_ALL_TAG');
                    commit('CLEAR_LOCK');
                    setToken(data);
                    resolve();
                })
            })
        },
    },
    mutations: {
        [UserActions.SET_COLLAPSE]: (state) => {
            state.isCollapse = !state.isCollapse;
        },
    }
}

export default user