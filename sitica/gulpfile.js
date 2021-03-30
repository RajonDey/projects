
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// const prefix = require('gulp-autoprefixer');

// compile scss into css
function style() {
    // 1. where is the scss file
    return gulp.src('./scss/**/*.scss')
    // 2. compile this scss file by comiler
    .pipe(sass()) 
    // 3. where do I save the compiled css
    .pipe(gulp.dest('./css'))
    // 4. stream changes to all browser
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;

