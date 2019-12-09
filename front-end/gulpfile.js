const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync').create();

// //compile sccs into css
// function style(){
//  // where is my css file
//   return gulp.src('./app/scss/*.scss')
//   // pass that file through sass compiler
//       .pipe(sass().on('error', sass.logError))
//       // where do I save the compiled css
//       .pipe(gulp.dest('./css'))
//     // stream changes to all browsers
//       .pipe(browserSync.stream())
//   }

  function css(){
    return  gulp.src('./app/css/*.css')
          .pipe(uglifycss({
            "uglyComments": true
          }))
          .pipe(gulp.dest('./dist/'))
         .pipe(browserSync.stream())

  }

  function watch(){
    browserSync.init({
      server:{
        baseDir: './'
      }
    });
    // gulp.watch('./app/scss/*.scss', style)
    gulp.watch('./app/css/*.css', css)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./app/*.js').on('change', browserSync.reload)
  }

  // exports.style = style;
  exports.css = css;
  exports.watch = watch;


 
