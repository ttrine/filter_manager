module.exports = function (grunt) {

  var buildConfig = require('../build.config.js');
  var _ = require('lodash');

  var builders = _.reduce(buildConfig['quick_queries'], function asFileWatcher(acc, obj, name) {
    if (obj.dest) {
      acc[name] = {
        src: obj.src,
        dest: obj.dest
      };
    }
    return acc;
  }, {});

  return _.extend({
      options: {
        data: grunt.config
      },

      build: {
        files: [{
          expand: true,
          flatten: true,
          src: ['<%= quick_queries.hello_world.container %>'],
          dest: '<%= build_dir %>'
        }]
      }
    },
    // replace tokens in quick queries which have a build dest
    builders);
};
