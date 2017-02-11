var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            { pattern: './config/karma-test-shim.js', watched: false }
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap'],
            'src/**/!(*spec).js': ['coverage']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['mocha', 'karma-remap-istanbul', 'karma-remap-istanbul'],
        remapIstanbulReporter: {
            remapOptions: {}, //additional remap options
            reportOptions: {}, //additional report options
            reports: {
                // lcovonly: './coverage/lcov.info',
                //html: './coverage'
                json: 'coverage/coverage-final.json',
                html: 'coverage/html',
                // 'text-summary': null
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};
