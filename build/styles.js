(function() {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var autoprefixer = require('autoprefixer');
  var SASS_INCLUDE_PATHS = [path.join(__dirname, '/node_modules/')];
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*'],
  });

  //styles
  gulp.task('styles', function() {
    return gulp
      .src('src/*.scss')
      .pipe($.feizheng.pkgHeader())
      .pipe(gulp.dest('dist'))
      .pipe($.sass({ includePaths: SASS_INCLUDE_PATHS }))
      .pipe($.postcss([autoprefixer()]))
      .pipe(gulp.dest('dist'));
  });
})();
