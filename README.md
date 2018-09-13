# Gulp Build
A Gulp build process to prepare a front end website for deployment

Treehouse Full Stack JavaScript Techdegree - Project 8

**Main Project Goals**
- Use gulp to implement a quick and efficient professional workflow using JavaScript, NPM and Node
- Concatenate and minify JavaScript files
- Compile SCSS into CSS in a concatenated and minified file
- Generate JavaScript and CSS source maps
- Compress any JPEG or PNG files
- All output for the build process should be in a dist folder for distribution or deployment
- The command line *gulp* command runs the build task and serves the project using a local web server
- Watch for changes to any .scss files

**Project Completed:** 09/13/2018  
**Grade:** Exceeds Expectations

---

**Installation Instructions:**

1. git clone https://github.com/jordanmor/gulp-build.git
2. npm install (*Note: This program uses Gulp 4.0. Running npm install will install gulp 4.0 locally, but it may need to be installed globally as well in order for this program to work properly.*)

**Gulp Commands**
- `gulp scripts` - concatenates, minifies, and copies all of the project’s JavaScript files into an all.min.js file that is then copied to the dist/scripts folder. Also generates JavaScript source maps.

- `gulp styles` - compiles the project’s SCSS files into CSS, then concatenates and minifies into an all.min.css file that is then copied to the dist/styles folder. Also generates CSS source maps.

- `gulp images` - optimizes the size of the project’s JPEG and PNG files, and then copies those optimized images to the dist/content folder.

- `gulp clean` - deletes all of the files and folders in the dist folder. Does **not** delete the dist folder itself.

- `gulp build` - runs the clean, scripts, styles, and images tasks. The clean task completes before the other commands.

- `gulp` - runs the build task and serves the project using a local web server. The program will continuously watch for changes to any .scss file in the project. When there is a change to one of the .scss files, the gulp styles command is run and the files are compiled, concatenated, and minified to the dist folder. The project will then reload in the browser, displaying the changes.