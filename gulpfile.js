var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var all = require('gulp-all');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('public/dist/**/*');
});

// TypeScript compile
gulp.task('app', function () {
    return all(
            gulp
            .src('public/app/**/*.ts')
            .pipe(typescript(tscConfig.compilerOptions))
            .pipe(gulp.dest('public/dist/app')),
            gulp.src("app/**/*.html")
            .pipe(gulp.dest('public/dist/app'))
            );
});

gulp.task('libs', function () {
    return gulp.src([
        "node_modules/es6-shim/es6-shim.min.js",
        "node_modules/systemjs/dist/system-polyfills.js",
        "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",
        "node_modules/angular2/bundles/angular2-polyfills.js",
        "node_modules/systemjs/dist/system.src.js",
        "node_modules/rxjs/bundles/Rx.js",
        "node_modules/angular2/bundles/angular2.dev.js",
        "node_modules/angular2/bundles/http.dev.js"
    ])
            .pipe(gulp.dest('public/dist/lib'));
});
gulp.task('build', ['app', 'libs']);
gulp.task('clean-build', ['clean', 'build']);

gulp.task('default', ['clean', 'build']);
