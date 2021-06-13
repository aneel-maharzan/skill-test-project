module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        //basic setting and info about plugins
        pkg: grunt.file.readJSON('package.json'),

        //sass
        sass: {
            options: {
                style: 'expanded',
                noCache: true,
            },
            dist: {
                files: {
                    './assets/css/style.css': ['./assets/scss/main.scss']
                }
            }
        },


        postcss: {
            options: {
                map: true,

                processors: [
                    require('autoprefixer')({ overrideBrowserslist: ['> .5%, last 2 versions'] }),

                ]
            },
            dist: {
                src: './assets/css/style.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'assets/js/script.min.js': ['assets/js/script.js']
                }
            }
        },

        watch: {
            css: {
                files: ['./assets/scss/**/*.scss'],
                tasks: ['sass', 'postcss', 'uglify', 'cssmin']
            },
            options: {
                spawn: false,
                livereload: true,
            }
        },



        // Copy files to deploy.
        copy: {
            deploy: {
                src: [
                    '**',
                    '!.*',
                    '!*.md',
                    '!.*/**',
                    '!Gruntfile.js',
                    '!package.json',
                    '!package-lock.json',
                    '!node_modules/**',
                    '!npm-debug.log',
                    '!*.php',
                    '!app/**'
                ],
                dest: 'build/',
                expand: true,
                dot: true
            }
        },

    });

    //load plugins

    // Load NPM tasks to be used here

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('@lodder/grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks
    grunt.registerTask('default', ['sass', 'postcss', 'cssmin', 'uglify']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('build', ['sass', 'postcss', 'cssmin', 'uglify', 'copy:deploy']);


};