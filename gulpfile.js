const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
gulp.task("sass" , ()=>{
    return gulp.src("src/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest("src/"))
}) 
gulp.task("watch" , ()=> {
    gulp.watch("src/*.scss" , gulp.series("sass"))
})