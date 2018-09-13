const gulp = require('gulp');
const uglify = require('gulp-uglify')
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const paths = {
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/scripts/'
  },
  styles: {
    src: 'src/sass/**/*.scss',
    dest: 'dist/styles/'
  },
  images: {
    src: 'src/images/*',
    dest: 'dist/content/'
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

gulp.task('styles', () => {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('all.min.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(reload({stream: true}));
});

gulp.task('images', () => {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('clean', () => del(['dist/**', '!dist']));

gulp.task('build', 
  gulp.series('clean',
    gulp.parallel('images', 'scripts', 'styles', done => {
      gulp.src(['src/index.html', 'src/icons/**'], {base: 'src/'})
        .pipe(gulp.dest('dist'));
      done();
    })
  )
);

gulp.task('serve', () => {
  browserSync.init({
    server: './dist/'
  });

  gulp.watch(paths.styles.src, gulp.parallel('styles'));
});

gulp.task('default', gulp.series('build', 'serve'));