module.exports = function (grunt) {

    var buildConfig = require('../env.config.js')(grunt);

    return {
        options: {
            login: {
                'TENTENGW': '<%= login.gateway %>',
                'TENTENUID': '<%= login.id %>',
                'TENTENPW': '<%= login.password %>'
            },
            table: '<%= login.password %>',
            sql: null,
            connection_string: 'DSN=sql1010odbc;',
            title: null,
            args: '-K -y -Y .',
            logTenUpCmd: true
        }
    }
};
