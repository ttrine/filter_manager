module.exports = function (grunt) {

    return {
        /**
         * By default, we want the Live Reload to work for all tasks; this is
         * overridden in some tasks (like this file) where browser resources are
         * unaffected. It runs by default on port 35729, which your browser
         * plugin should auto-detect.
         */
        options: {
            livereload: true,
            livereloadOnError: false,
            spawn: false
        },

        html: {
            files: ['<%= app_files.html %>'],
            tasks: ['build']
        },

        quickapps: {
            files: ['<%= app_files.quickapps %>'],
            tasks: ['upload']
        },

        query: {
            files: ['<%= app_files.queries %>'],
            tasks: ['query']
        },

        config_files: {
            files: ['<%= grunt_files.js %>'],
            tasks: ['build'],
            options: {
                reload: true
            }
        },

        gruntfile: {
            files: ['<%= grunt_files.js %>'],
            options: {
                reload: true,
                livereload: false
            }
        }
    }
};
