(function() {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*'],
  });

  var { includePaths } = nx.$global;

  //styles
  gulp.task('styles', function() {
    return gulp
      .src('src/*.scss')
      .pipe($.feizheng.pkgHeader())
      .pipe(gulp.dest('dist'))
      .pipe($.sass({ includePaths }))
      .pipe($.postcss([autoprefixer()]))
      .pipe(gulp.dest('dist'));
  });
})();
