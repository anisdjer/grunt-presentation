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
				files: [ 'style.css' ],
                tasks: ['cssmin', 'autoprefixer']
			},
            html: {
                files: [ 'index.html']
            }
		},



        cssmin: {
            compress: {
                files: {
                    'style.min.css': [ 'style.css' ]
                }
            }
        },
        autoprefixer: {
            dist: {
                src: 'style.min.css'
            }
        }

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-autoprefixer' );


};
