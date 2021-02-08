const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const sassGlob = require('gulp-sass-glob-import')
const autoprefixer = require('gulp-autoprefixer')
const merge2 = require('merge2')
const rename = require("gulp-rename")

const styles = [
    'src/styles/main.scss'
];



module.exports = function styles() {
  return merge2(gulp.src('src/styles/main.scss')
    .pipe(sassGlob())
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('build/css')))
}
