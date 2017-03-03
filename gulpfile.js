//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

gulp.task('gh-pages', function() {
  return gulp.src(['txt/*/*/*','txt/*/*','txt/*'])
  .pipe(ghPages());
});

gulp.task('build', shell.task([
  'npm run build'
]));

gulp.task('deploy', shell.task([
  'npm run deploy'
]));

gulp.task('serve', shell.task([
  'gitbook serve'
]));

gulp.task('default', ['build', 'deploy']);
