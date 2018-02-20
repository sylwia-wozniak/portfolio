module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            style: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            html: {
                files: 'src/**/*.html',
                tasks: ['includes']
            }
        },
        sass: {
            dist: {
                options:{
                    trace:true
                },
                files: {
                    'css/build.css': 'scss/base.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            html: {
                files: [
                    // includes files within path
                    {expand: true, src: ['*.html'], dest: 'dist/', filter: 'isFile'},
            
                ],
            },
            js: {
                files: [
                    // includes files within path
                    {expand: true, src: ['js/*.js'], dest: 'dist/', filter: 'isFile'},
            
                ],
            },
            images: {
                files: [
                    // includes files within path
                    {expand: true, src: ['img/*.jpg'], dest: 'dist/', filter: 'isFile'},
            
                ],
            },
            works: {
                files: [
                    // makes all src relative to cwd
                    {expand: true, cwd: 'works/', src: ['**'], dest: 'dist/works/'},            
                ],
            },
        },
        clean: {
            build: {
                src: ['dist/*','!dist/.git/']
            }
        },  
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./",
                        index: "index.html"
                    }
                }
            }
        },
        includes: {
            files: {
              src: ['src/*.html'], // Source files 
              dest: './', // Destination directory 
              flatten: true,
              cwd: '.',
              options: {
                silent: true,
                banner: '<!-- I am a banner <% includes.files.dest %> -->'
              }
            }
          }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //load grunt-includes
    grunt.loadNpmTasks('grunt-includes');
    // define default task
    grunt.registerTask('default', ['sass', 'includes']);
    grunt.registerTask('dev', ['default','browserSync', 'watch']);
    grunt.registerTask('build', ['clean','default','cssmin', 'copy']);
};