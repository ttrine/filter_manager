module.exports = function (grunt) {
    var buildConfig = require('../env.config.js')(grunt);
    var _ = require('lodash');

    // tenup "x1010data.ttrine.filter_manager_dev.system_data.companies" -u ttrine
    //       -t 'Companies' 'SELECT * FROM product_filter_manager.system_data.companies' -C "DSN=sql1010odbc;" -y

    return _.extend({
            // default options
            options: {
                login: {
                    'TENTENGW': '<%= login.gateway %>',
                    'TENTENUID': '<%= login.id %>',
                    'TENTENPW': '<%= login.password %>'
                },
                connection_string: 'DSN=sql1010odbc;',
                sql: 'SELECT * FROM <%= root_sql_path %>.{table_name}',
                table: '<%= root_path %>.{table_name}',
                args: '-K -y -Y . -8',
                logTenUpCmd: true,
            }
        },

        // add all of the tables defined in sync_tables
        buildConfig['data_tables']
    );
};