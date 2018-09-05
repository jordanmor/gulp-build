const gulp = require('gulp');
const uglify = require('gulp-uglify')
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/scripts/'
  }
};

gulp.task('scripts', () => {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.scripts.dest));
});