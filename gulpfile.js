const gulp =require('gulp');
const html = require('gulp-htmlmin');
const sass =require('gulp-sass');
const rename =require('gulp-rename');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const concat =require('gulp-concat');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');


function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}
function fnHtml(){
    return gulp.src('./src/pages/*.html')
.pipe(html())
.pipe(gulp.dest('./dist/pages'))
}
function fnCssnano(){
    return gulp.src('./src/sass/*.scss')
      .pipe(sass())
      .pipe(cssnano())
      .pipe(rename({suffix : '.min'}))
      .pipe(gulp.dest('./dist/css'))
}
function fnJS(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}
function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}
function fnLib(){
    return gulp.src('./src/lib/*')
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/lib'));
}
function fnWatch(){
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/sass/*scss',fnCssnano);
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/pages/*.html',fnHtml);gulp.watch("./src/img/*",fnImg)
}
exports.copyIndex = fnCopyIndex;
exports.html =fnHtml;
exports.css = fnCssnano;
exports.js = fnJS;
exports.img = fnImg;
exports.lib = fnLib
exports.default = fnWatch;


