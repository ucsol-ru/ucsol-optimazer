const { dest } = require('gulp')
const gulp = require('gulp')
const uglify = require('gulp-uglify')

function scripts() {
  return gulp.src('./src/ucsol/js/*.js')
    .pipe(uglify())
    .pipe(dest('./dist/js/'))
}

module.exports = scripts