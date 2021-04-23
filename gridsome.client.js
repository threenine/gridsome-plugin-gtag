import VueGtag from "vue-gtag";
export default function(Vue, options, {isServer, router}) {
    if (isServer) return

    Vue.use(VueGtag, {
        ...options
    }, router)

}
