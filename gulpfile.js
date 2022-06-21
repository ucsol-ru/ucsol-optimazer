const gulp = require('gulp')
const styles = require('./gulp/styles')

exports.default = gulp.parallel(styles)