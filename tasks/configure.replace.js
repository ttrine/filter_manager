module.exports = {

    /**
     * Replaces tokens defined in html files
     */
    build: {
        options: {
            patterns: [{
                match: 'login.id',
                replacement: '<%= login.id %>'
            }, {
                match: 'login.password',
                replacement: '<%= login.password %>'
            }, {
                match: 'quickapps.hello_world.url',
                replacement: '<%= quickapps.hello_world.url %>'
            }]
        },

        files: [{
            expand: true,
            flatten: true,
            src: ['<%= app_files.html %>'],
            dest: '<%= build_dir %>'
        }]
    }
};
