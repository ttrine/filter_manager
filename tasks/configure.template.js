module.exports = function (grunt) {

	var buildConfig = require('../env.config.js')(grunt);
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
					src: ['<%= quick_queries.view.container %>'],
					dest: '<%= build_dir %>'
				}]
			},

			query_tests: {
				files: [{
					src: ['test/tendo.helper.template.js'],
					dest: '<%= build_dir %>/tendo.helper.js'
				}]
			}
		},
		// replace tokens in quick queries which have a build dest
		builders);
};
