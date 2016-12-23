module.exports = function (grunt) {

    var buildConfig = require('../build.config.js');
    var _ = require('lodash');

    var builders = _.reduce(buildConfig['quick_queries'], function (acc, obj, name) {
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
                patterns: [{
                    match: 'login.id',
                    replacement: '<%= login.id %>'
                }, {
                    match: 'login.password',
                    replacement: '<%= login.password %>'
                }, {
                    match: 'quick_queries.main.url',
                    replacement: '<%= quick_queries.hello_world.url %>'
                }, {
                    match: 'quick_queries.main.title',
                    replacement: '<%= quick_queries.hello_world.title %>'
                }, {
                    match: 'root_path',
                    replacement: '<%= root_path %>'
                },  {
                    match: 'version',
                    replacement: '<%= version %>'
                }]
            },

            /**
             * Replaces tokens defined in html files
             */
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
        builders
    )
};
