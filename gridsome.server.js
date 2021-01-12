module.exports = (api, options) => {
    // eslint-disable-next-line no-ternary
    options.enabled = options.enabled === undefined ? process.env.NODE_ENV === 'production' : options.enabled
    api.setClientOptions(options)
}

