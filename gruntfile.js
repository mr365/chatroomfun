module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.initConfig({
			  uglify: {
			    my_target: {
			      files: {
							'_/js/script.js': ['_/components/js/*.js'] 
					}// my target
			}// uglify is an object here
		},//uglify
		watch: {
			options:{
				livereload: true
			},
			script: {
				files: ['_/components/js/*.js'],
			tasks :	['uglify']
		},
		html:{
			files: {
				['*.ejs']
			}
		}
			
			//files
		}//watch
	});//initconfig

	grunt.registerTask('default','watch');// execute the watch task by default whenever I use grunt cmd in the cli.
}//exports


     