'use strict'

const { task, watch, series, dest, src } = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const nodemon = require('gulp-nodemon')
const argv = require('yargs').argv;
sass.compiler = require('sass')

function compile () {
  const theme = argv.theme !== undefined ? argv.theme : 'default'
  return src(`./rds/themes/${theme}/style.scss`)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest(`./public/css/${theme}`))
}

task('default', () => {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT: 3000
    },
    ignore: ['./node_modules/**']
  }).on('restart', () => {
    console.log('Restarting...')
  })
  watch('./rds/**/*.scss', series(compile))
})
