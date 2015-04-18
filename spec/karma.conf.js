module.exports = function (config) {
    'use strict';

    var libSources = [
        'dist/js/L.DNC.js'
    ];

    var leafletSources = require(__dirname + '/../node_modules/leaflet/build/build.js')
        .getFiles()
        .map(function (filename) {
          return __dirname + "/../node_modules/leaflet/" + filename;
        });

    var files = ['spec/suites/**/*.js'].concat(
        leafletSources,
        libSources
    );

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // frameworks to use
        frameworks: ['mocha', 'chai', 'sinon'],

        // list of files / patterns to load in the browser
        files: files,
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots'],

        // web server port
        port: 9876,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers for local dev, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
