(function() {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del'],
  });
  var { includePaths } = nx.$global;
  //styles
  gulp.task('docs', function() {
    return gulp
      .src('docs/style.scss')
      .pipe(
        $.sass({ outputStyle: 'expanded', includePaths }).on(
          'error',
          $.sass.logError
        )
      )
      .pipe(gulp.dest('docs'));
  });
})();
