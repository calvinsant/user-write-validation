import webpack from "webpack-stream";
import { src, dest, watch, series, parallel } from "gulp";
import yargs from "yargs";
var sass = require("gulp-sass")(require("sass"));
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
//gulp styles --prod
const PRODUCTION = yargs.argv.prod;
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";
import imagemin from "gulp-imagemin";
import del from "del";

//Convert SASS to CSS, autoprefix and compress and source map if --prod flag
export const styles = () => {
  return src("src/scss/bundle.scss")
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: "ie8" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest("dist/css"));
};
//Watches specified files and triggers desired tasks
export const watchFiles = () => {
  watch("src/scss/**/*.scss", styles);
  watch("src/images/**/*.{jpg,jpeg,png,svg,gif}", images);
  watch("src/js/**/*.js", scripts);
};

//Minifies all images within src directory if --prod flag is given
export const images = () => {
  return src("src/images/**/*.{jpg,jpeg,png,svg,gif}")
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest("dist/images"));
};

export const scripts = () => {
  return src("src/js/bundle.js")
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? "production" : "development",
        devtool: !PRODUCTION ? "inline-source-map" : false,
        output: {
          filename: "bundle.js",
        },
      })
    )
    .pipe(dest("dist/js"));
};

//Delete the dist folder
export const clean = () => del(["dist"]);

export const dev = series(clean, parallel(styles, scripts, images), watchFiles);
export const build = series(clean, parallel(styles, scripts, images));
export default dev;
