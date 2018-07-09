import website from '@/const/website'
import {CommonActions} from "../actions";

const commons = {
  state: {
    isCollapse: false,
    isFullScreen: false,
    website: website,
  },
  mutations: {
    [CommonActions.SET_COLLAPSE]: (state) => {
      state.isCollapse = !state.isCollapse;
    },
  }
}

export default commons