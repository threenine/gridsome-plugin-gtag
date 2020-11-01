# Gridsome Plugin to incorporate Google Tag



### How to use 
Install the plugin using 
``` shell script
npm i gridsome-plugin-gtag
```

Put your Google Analytics ID in you environment variables with a name 
similar to `GOOGLE_ANALYTICS_ID`.

Then add the following to you `gridsom.config.js` plugins array



```shell script
{
    use: 'gridsome-plugin-gtag',
    options: {
        config: {
            id: process.env.GOOGLE_ANALYTICS_ID,
        },
    },
},
```


### Developed, Sponsored and Supported 
 
[![threenine logo](http://static.threenine.co.uk/img/github_footer.png)](https://threenine.co.uk/)
