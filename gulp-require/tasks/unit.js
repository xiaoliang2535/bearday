/**
 * Created by echochi on 16/2/23.
 */

var gulp = require('gulp');
var Server = require('karma').Server;
var ROOT_PATH = process.cwd();

/**
 * Run test once and exit
 */
gulp.task('unit', function (done) {
    new Server({
        configFile: ROOT_PATH + '/gulp-require/util/karma.conf.js',
        singleRun: true
    }, done).start();
});