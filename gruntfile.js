module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css' : 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist:{
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/MediaDeviceInfo.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function(){
            console.log('Olá Grunt');
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less','sass','uglify']);
}