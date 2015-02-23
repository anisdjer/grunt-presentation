/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({

		watch: {
            options: {
                livereload: true
            },
			css: {
				files: [ 'style.css' ]
			},
            html: {
                files: [ 'index.html']
            }
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );


};
