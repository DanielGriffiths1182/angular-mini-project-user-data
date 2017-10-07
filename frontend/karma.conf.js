// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-jasmine
            // Set framework to jasmine
            'jasmine'
        ],

        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'mocha',

            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            'coverage'
        ],
        files: [
            'src/tests.webpack.js'
        ],
        preprocessors: {
            'src/tests.webpack.js': ['webpack', 'sourcemap']
        },

        browsers: [
            // Run tests using PhantomJS
            'PhantomJS'
        ],

        singleRun: true,

        // Configure code coverage reporter
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        },

        webpack: require('./webpack.config'),

        // Hide webpack build information from output
        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    });
};
