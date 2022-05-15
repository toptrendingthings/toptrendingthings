module.exports = {
    images: {
        loader: 'akamai',
        path: '',
    },
    future: {
        webpack5: true,
    },
    webpack: function (config, options) {
        config.experiments = {};
        return config;
    },
}
