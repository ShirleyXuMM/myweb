const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');

gulp.task('htmlmin', () => {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});