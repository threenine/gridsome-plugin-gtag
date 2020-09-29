import VueGtagPlugin from "vue-gtag";
export default function(Vue, options, {isClient}) {
    if (!isClient) return

    Vue.use(VueGtagPlugin, {
        "config": {"id": options.id}
    })

}
