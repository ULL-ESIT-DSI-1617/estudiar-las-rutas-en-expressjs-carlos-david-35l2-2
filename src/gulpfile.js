var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

gulp.task('server_routing', function(){
  return gulp.src('./src').pipe(shell(['node /routing_guide/server_routing.js']))
  });

gulp.task('server_middleware_basico', function(){
  return gulp.src('./src').pipe(shell(['node /middleware/server_middleware_basico.js']))
  });


gulp.task('server_middleware', function(){
  return gulp.src('./src').pipe(shell(['node /middleware/server_middleware.js']))
  });
