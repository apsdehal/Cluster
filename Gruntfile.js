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
        src: ['src/*.js', 'templates/*.hbs', 'templates/**/*.hbs'],
        dest: 'build/app.js',
        options : {
          transform : ['hbsfy']
        }

      }
    }
  });

  grunt.registerTask('default',['browserify']);

  grunt.registerTask('production', ['browserify']);
};