
export default function(Vue, options, {isClient}) {
    if (!isClient) return

    function scriptBody(options) {
        return `<script>
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${options.id}');
               </script>`
    }
    document.head.insertAdjacentHTML('afterbegin', scriptBody(options))
    document.head.insertAdjacentHTML('afterbegin', `<script async src="https://www.googletagmanager.com/gtag/js?id=${options.id}"></script>`)
}
