const gulp = require('gulp')
const styles = require('./gulp/styles')
const scripts = require('./gulp/script')


exports.default = gulp.parallel(styles)
exports.script = gulp.parallel(scripts)
