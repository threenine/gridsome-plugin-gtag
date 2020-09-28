
export default function(Vue, options, {isClient}) {

   /* <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151978506-1"></script>

    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-151978506-1');
    </script>*/
    function scriptBody(options) {
     return   ` <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${options.id}');
    </script>`
    }
    document.head.insertAdjacentHTML('afterend', scriptBody(options))
    document.head.insertAdjacentHTML('afterend', `<script async src="https://www.googletagmanager.com/gtag/js?id=${options.id}"></script>`)


}
