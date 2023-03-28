const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(donde) {
    
    src('src/scss/**/*.scss') // Identificar el archivo de SASS 
        .pipe(plumber())
        .pipe(sass()) // Compilarlo 
        .pipe(dest('build/css')); // Almacenar en el disco duro 

    donde() //Callback cque avisa a gulp cuando llegamos al final
}

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'))

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript)

    done();
}


exports.css = css;
exports.js = javascript;
exports.dev = parallel(css, javascript, dev);