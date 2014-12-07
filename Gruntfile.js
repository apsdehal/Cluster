module.exports = function(grunt) {
  require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        watch: true,
        keepAlive: true
      },
      app: {
        src: ['src/*.js'],
        dest: 'build/app.js',
      }
    }
  });

  grunt.registerTask('default',['browserify']);

  grunt.registerTask('production', ['browserify']);
};