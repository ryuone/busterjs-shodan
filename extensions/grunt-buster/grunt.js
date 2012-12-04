/*global module:false*/
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
            pkg: '<json:package.json>',
            meta: {
                banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
            },
            lint: {
                files: ['grunt.js', 'lib/**/*.js', 'js/**/*.js']
            },
            buster: {
                test: {
                    config: 'test/buster.js'
                },
                server: {
                    port: 1111
                }
            },
            requirejs: {
                almond: true,
                baseUrl: '.',
                include: ['js/main'],
                paths: {
                    // underscore: '../vendor/underscore',
                    // jquery    : '../vendor/jquery',
                    // backbone  : '../vendor/backbone'
                },
                pragmas: {
                    useStrictRegExp: true,
                    doExclude: true
                },
                skipModuleInsertion: false,
                optimizeAllPluginResources: true,
                findNestedDependencies: true,
                out: 'dist/all-min.js'
            },
            concat: {
                dist: {
                    src: ['<banner:meta.banner>', 'js/*.js'],
                    dest: 'dist/<%= pkg.name %>.js'
                }
            },
            min: {
                dist: {
                    src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                    dest: 'dist/<%= pkg.name %>.min.js'
                }
            },
            watch: {
                files: '<config:lint.files>',
                tasks: 'lint buster'
            },
            jshint: {
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    boss: true,
                    eqnull: true,
                    browser: true
                },
                globals: {
                }
            },
            uglify: {
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-buster');
// Default task.
//    grunt.registerTask('default', 'lint buster concat min');
    grunt.registerTask('default', 'concat min');
    grunt.registerTask('build', 'requirejs');
}
;
