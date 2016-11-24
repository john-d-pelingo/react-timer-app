// karma : basic test runner
// karma-chrome-launcher : for chrome
// karma-mocha : integrate mocha with karma
// karma-mocha-reporter : checkboxes in the terminal
// karma-mocha-sourcemap-loader : use the actual jsx file paths and not the compressed webpack bundle file
// karma-webpack : integrate webpack with karma
// mocha : gives series of functions to make testing JavaScript easy
// expect : assertion functions

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        // Specify which browsers we want are tests to run in
        browser      : ['Chrome'],
        singleRun    : true,
        // Use the mocha framework for tests
        frameworks   : ['mocha'],
        // Globing pattern
        // We want to get files in the test folder or in any folder in the test folder (subdirectory)
        // that have a file name of anything but end in .test.jsx
        files        : ['app/tests/**/*.test.jsx'],
        // Things we wanna do with our test files
        // For any of the specified files we wanna run webpack and sourcemap
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        // Shows which things passed and which things failed
        reporters    : ['mocha'],
        // Test timeouts
        // If a test never ends, cancel it at a certain point of time
        client       : {
            // Use mocha
            mocha: {
                // 5 seconds
                timeout: '5000'
            }
        },
        // Load webpack config
        webpack      : webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};