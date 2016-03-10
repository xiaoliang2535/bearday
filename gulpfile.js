/**
 * Created by echochi on 16/2/23.
 */

var gulp = require('gulp'),
    requireDir  = require('require-dir');

requireDir(__dirname + '/gulp-require/tasks', { recurse: true });

gulp.task('default',['clean']);
