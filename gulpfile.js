const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src("./src/styles/*.scss") // Retorna todos arquivos .scss de src
        .pipe(sass({ outputStyle: "compressed" })) // passa os arquivos .scss para css e os "compacta" o maximo possivel, ganha-se mais performance
        .pipe(gulp.dest("./dist/css"));
}

function images() {
    return gulp.src("./src/images/**/*") 
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
} 

exports.default = gulp.parallel(styles, images);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', styles)
}
