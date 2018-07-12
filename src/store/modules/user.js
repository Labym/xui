import website from '@/const/website'
import {UserActions} from "../actions"
import UserApi from '../../api/user'
import {setToken, getToken} from "../../common/utils/session";

const user = {
    state: {
        userInfo: {
            username:'Flood',
            avatar:'static/img/1299118.jpg'
        },
        captcha:{

        },
        token: getToken()
    },
    actions: {
        [UserActions.actions.LOGIN]({commit, state, dispatch}, userInfo) {
            return new Promise((resolve, reject) => {
                UserApi.authenticate(userInfo.username, userInfo.password, userInfo.rememberMe, userInfo.captcha).then(res => {
                    const data = res.data;
                    commit(UserActions.mutations.SET_TOKEN, data);
                    setToken(data.token);
                    resolve();
                })
            })
        },

        [UserActions.actions.CAPTCHA]({commit, state, dispatch}, userInfo) {
            return new Promise((resolve, reject) => {
                UserApi.captcha().then(res => {
                    const data = res.data;
                    commit(UserActions.mutations.SET_CAPTCHA, data);
                    resolve();
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
    }
}

export default user