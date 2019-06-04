const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imgmin = require('gulp-imagemin');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');


gulp.task('htmlmin', () => {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});

gulp.task('cssmin', () => {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('imgmin', () => {
    return gulp.src('src/img/*')
        .pipe(imgmin())
        .pipe(gulp.dest('dist/img'));
});



// 6. 文件监听
gulp.task('watch', () => {
    gulp.watch(['./src/html/*.html', './src/css/*.css', './src/img/*'], gulp.series('htmlmin', 'cssmin', 'imgmin'));
})