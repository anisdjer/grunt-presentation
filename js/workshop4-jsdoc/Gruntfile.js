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
            },
            js: {
                files: ['script.js'],
                tasks: 'uglify'
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
        },



        uglify: {
            options: {

            },
            build: {
                src: 'script.js',
                dest: 'script.min.js'
            }
        },

        // http://usejsdoc.org/
        jsdoc : {
            dist : {
                src: ['script.js', 'circle.js'],
                options: {
                    destination: 'doc'
                }
            }
        }


    });

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-autoprefixer' );


    grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    grunt.loadNpmTasks( 'grunt-jsdoc' );


};
