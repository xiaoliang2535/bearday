/**
 * Created by echochi on 16/2/23.
 */

var ROOT_PATH = process.cwd();

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            ROOT_PATH + '/src/**/*.js',
            ROOT_PATH + '/test/**/*.spec.js',
        ]
    });
};