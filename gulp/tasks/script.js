const gulp   = require('gulp'),
      concat = require('gulp-concat'),
      minify = require('gulp-minify'),
      rename = require("gulp-rename");

const corejs = [
    'node_modules/jquery/dist/jquery.min.js'
];

const projectjs = [
    'src/js/main.js',
    'src/js/**/*.js'
];

const scripts = corejs.concat(projectjs);

module.exports = function script() {
    return gulp.src(scripts).on('error', (err) => console.error('Error!', err.message))
        .pipe(concat('main.js'))
        /*.pipe(minify({
            noSource: true,
            ext: {
                min: '.min.js'
            }
        })).on('error', (err, done) => console.error('Error!', err.message, done))*/
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/js'));
}
