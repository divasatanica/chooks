const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

gulp.task('clean', async function() {
  // HACK: Gulp-Typescript will throw Typescript Semantic Error if it exists
  await del('node_modules/@types/webpack/**');
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

gulp.task('cjs', function() {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
  });

  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: './babel.build.config.js'
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', function() {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext',
  });

  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: './babel.build.config.js'
      }),
    )
    .pipe(gulp.dest('es/'));
});

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

exports.default = gulp.series('clean', 'cjs', 'es', 'declaration');