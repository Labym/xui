import {createApp} from "./main2";

const { app, router, store } = createApp()

router.onReady(() => {
    app.$mount('#app')
})
