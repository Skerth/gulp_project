const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const replace = require('gulp-replace')

module.exports = function pug2html() {
  return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({pretty: true}))
    .pipe(replace('@@timestamp', (new Date()).getTime()))
    .pipe(gulp.dest('build'))
}
