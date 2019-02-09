// var jsBundle =
//  ['./js/jquery.min.js', './js/bootstrap.min.js', './js/jquery.plugin.min.js',
// 	'./js/modernizr-2.6.2-respond-1.1.0.min.js',
// 	'./js/jquery.countdown.min.js', './js/jquery.flexslider-min.js',
// 	'./js/lightbox.min.js', './js/scripts.js', './js/scrollReveal.min.js', './js/skrollr.min.js',
// 	'./js/smooth-scroll.min.js', './js/spectragram.min.js', './js/twitterFetcher_v10_min.js'];
var jsBundle = ['js/jquery.min.js',
	'js/jquery.plugin.min.js',
	'js/bootstrap.min.js',
	'js/jquery.flexslider-min.js',
	'js/smooth-scroll.min.js',
	'js/skrollr.min.js',
	'js/spectragram.min.js',
	'js/scrollReveal.min.js',
	'js/isotope.min.js',
	'js/twitterFetcher_v10_min.js',
	'js/lightbox.min.js',
	'js/jquery.countdown.min.js',
	'js/scripts.js'];

var cssBundle = ['./css/flexslider.min.css', './css/line-icons.min.css', './css/elegant-icons.min.css',
	'./css/lightbox.min.css', './css/bootstrap.min.css', './css/theme-aquatica.css', './css/custom.css'];

var gulp = require('gulp'),
		plugins = {
			uglify: require('gulp-uglify'),
			concat: require('gulp-concat'),
			filesize: require('gulp-filesize'),
			cssmin: require('gulp-cssmin'),
			rename: require('gulp-rename'),
			sourcemaps: require('gulp-sourcemaps'),
			util: require('gulp-util')
		};

gulp.task('js', function() {
	return gulp.src(jsBundle)
		.pipe(plugins.concat('bundle.min.js'))
		.pipe(plugins.uglify(/*{preserveComments: 'license'}*/))
		// .pipe(plugins.rename('bundle.min.js'))
		.pipe(gulp.dest('./js'))
		// .pipe(plugins.filesize())
		.pipe(plugins.filesize())
		.on('error', plugins.util.log);
});
gulp.task('css', function() {
	return gulp.src(cssBundle)
		.pipe(plugins.concat('bundle.min.css'))
		.pipe(plugins.cssmin({}))
		// .pipe(plugins.rename('bundle.min.css'))
		.pipe(gulp.dest('./css'))
		.pipe(plugins.filesize())
		.on('error', plugins.util.log);
});

gulp.task('default', ['css', 'js'], function () {

	plugins.util.log('Dunzo!');
});
