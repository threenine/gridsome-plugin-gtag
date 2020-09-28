import VueGtag from "vue-gtag";
export default function(Vue, options, {isClient}) {

Vue.use(VueGtag, {
    config: { id: options.id }
})
}
