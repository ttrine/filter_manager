'use strict';

module.exports = function (grunt) {


    /**
     * Loads all config files that start with "config." (configs can export a function(grunt) or object)
     */
    function loadTaskConfigs(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('configure.*.js', {cwd: path}).forEach(function (config) {
            key = config.replace(/\.js$/, '').replace('configure.', '');
            var o = require(path + config);
            object[key] = (typeof(o) === 'function') ? o(grunt) : o;
        });

        return object;
    }

    /**
     * Loads all grunt plugins in package.json. These are installed based on the versions listed
     * in `package.json` when you do `npm install` in this directory.
     */
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig(
        grunt.util._.extend(
            require('./build.config.js'), // build info
            grunt.file.readJSON('package.json'), // app/package info
            loadTaskConfigs('./tasks/') // task configs
        )
    );

    /**
     * Only upload the changed files
     */
    var changedFiles = Object.create(null);
    var onChange = grunt.util._.debounce(function () {
        grunt.config('tendo.upload.src', Object.keys(changedFiles));
        grunt.config('tendo.query.src', Object.keys(changedFiles));
        changedFiles = Object.create(null);
    }, 200);
    grunt.event.on('watch', function (action, filepath) {
        changedFiles[filepath] = action;
        onChange();
    });

    grunt.loadTasks('tasks'); // load custom task files in the tasks folder

    grunt.registerTask('default', ['serve']);

    grunt.registerTask('upload', [
        'tendo:upload'
    ]);

    grunt.registerTask('query', [
        'tendo:query'
    ]);

    grunt.registerTask('inline_query', [
        'tendo:inline_query'
    ]);

    grunt.registerTask('build', [
        'clean:build',
        'replace:build'
    ]);

    grunt.registerTask('serve', 'Compile then start a "connect" web server', function (target) {
        grunt.task.run([
            'build',
            'connect:livereload',
            'watch'
        ]);
    });
};
