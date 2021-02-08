const gulp = require('gulp')

module.exports = function images() {
  return gulp.src('src/img/**/*.{gif,png,jpg,svg,webp}')
    .pipe(gulp.dest('build/img'))
}

