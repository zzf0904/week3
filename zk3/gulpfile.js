var gulp = require('gulp');

var server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('./src')
        .pipe(server({
            open: true,
            liverload: true,
            port: '8888',
            // 请求拦截
            middleware: function(req, res, next) {
                next();
            }
        }));
});
gulp.task('default', ['server']);