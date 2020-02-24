(function() {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var fs = require('fs');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del'],
  });

  $.SASS_INCLUDE_PATHS = [path.join(__dirname, '/node_modules/')];

  //import
  fs.readdirSync('./build').map(function(file) {
    require('./build/' + file);
  });

  gulp.task('default', gulp.series(['clean', 'styles', 'docs']));
})();
