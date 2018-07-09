import website from '@/const/website'
const commons = {
  state: {
    isCollapse: false,
    isFullScren: false,
    website: website,
  },
  mutations: {
    SET_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse;
    },
  }
}

export default commons