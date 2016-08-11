var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var merge = require('merge-stream');
var templateCache = require('gulp-angular-templatecache');

var appFilesBase = 'src/main/webapp/app';
var index;


gulp.task('index', function() {
    index = gulp.src('src/main/webapp/assets/index.html')
        .pipe(gulp.dest('target/classes/static'));
});

gulp.task('default', ['package'], function () {
});

gulp.task('package', ['main'], function() {
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['default']);
});

gulp.task('main', ['index'], function() {
    var mainCss = gulp.src('src/main/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(cleanCss({processImport: false}))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('target/classes/static/css'));

    var js = gulp.src([
        appFilesBase + '/*.bootstrap.js',
        appFilesBase + '/*.module.js',
        appFilesBase + '/services/**/*.js',
        appFilesBase + '/**/*.js'
    ], {base: appFilesBase});

    var htmlTemplates = gulp.src(appFilesBase + "/**/*.tpl.html")
        .pipe(templateCache({
            module: 'app'
        }));

    var mainJs = merge(js, htmlTemplates)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('target/classes/static/js'));

    index.pipe(inject(mainCss, { addRootSlash: true, name: 'main', relative: true }))
    index.pipe(inject(mainJs, { addRootSlash: true, name: 'main', relative: true }))
        .pipe(gulp.dest('target/classes/static'));
});