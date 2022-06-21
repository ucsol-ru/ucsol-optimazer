const gulp = require('gulp')
const cssnano = require('gulp-cssnano')

function styles(){
  return gulp.src('./src/ucsol/css/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css/'))
}

module.exports = styles