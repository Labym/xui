const getters = {
    isCollapse: state => state.commons.isCollapse,
    isFullScreen: state => state.commons.isFullScreen,
    website: state => state.commons.website,
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    captcha: state => state.user.captcha,
    menus: state => state.user.menus,

}
export default getters