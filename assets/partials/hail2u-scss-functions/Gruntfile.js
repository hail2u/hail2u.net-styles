'use strcit';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['tmp/'],

    nodeunit: {
      tests: ['test/*_test.js']
    },

    sass: {
      options: {
        unixNewlines: true,
        sourcemap: 'none'
      },

      main: {
        filter: 'isFile',
        expand: true,
        cwd: 'test/fixtures/',
        ext: '.css',
        src: ['*.scss'],
        dest: 'tmp/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('test', [
    'clean',
    'sass',
    'nodeunit'
  ]);

  grunt.registerTask('default', [
    'test'
  ]);
};
