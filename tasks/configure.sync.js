module.exports = function (grunt) {
	var buildConfig = require('../env.config.js')(grunt);
	var tenup = require('tenup');
	var _ = require('lodash');

	grunt.registerTask('sync_table', 'Pull table from prod and push to specified environment', function (table_name, table_title){
		var options =
			{
				gateway: grunt.config.data.login.gateway,
				user: grunt.config.data.login_id,
				password: grunt.config.data.login_password,
				source: 'product_filter_manager.' + table_name,
				table: grunt.config.data.root_path + '.' + table_name,
				title: table_title,
				executable: '/usr/local/bin/tenup'
			};

		var done = this.async();
		tenup.execute(options, function (status, results) {
			if (status === false) {
				console.log("fail: "+results);
				process.exit(1);
			}

			done();
		});
	});

	grunt.registerTask('sync_dataset', 'Sync all the tables for a dataset', function (dataset_name, dataset_title){
		dataset_folder = 'dataset_configs.' + dataset_name;
		grunt.task.run('sync_table:' + dataset_folder + '.raw_hierarchy: Raw Hierarchy');
        grunt.task.run('sync_table:' + dataset_folder + '.companies:Companies');

        audit_prefix = 'audit.dataset_configs.' + dataset_name;
        grunt.task.run('sync_table:' + audit_prefix + '_transaction_log:' + dataset_name + ' Transaction Log');
        grunt.task.run('sync_table:' + audit_prefix + '_archive:' + dataset_name + ' Archive');
    });

	grunt.registerTask('sync', 'Pull all system tables from prod and push to specified environment', function () {
		// System Data
        grunt.task.run('sync_table:system_data.companies:Companies');
        grunt.task.run('sync_table:system_data.access:Access');
        grunt.task.run('sync_table:system_data.hierarchies:Hierarchies');
        grunt.task.run('sync_table:system_data.raw_hierarchies:Raw Hierarchies');
        grunt.task.run('sync_table:system_data.filters:Filters');

        grunt.task.run('sync_table:audit.system_data.companies_transaction_log:Companies Transaction Log');
        grunt.task.run('sync_table:audit.system_data.companies_archive:Companies Archive');
        grunt.task.run('sync_table:audit.system_data.access_transaction_log:Access Transaction Log');
        grunt.task.run('sync_table:audit.system_data.access_archive:Access Archive');
        grunt.task.run('sync_table:audit.system_data.hierarchies_transaction_log:Hierarchies Transaction Log');
        grunt.task.run('sync_table:audit.system_data.hierarchies_archive:Hierarchies Archive');

        // Datasets
        grunt.task.run('sync_dataset:card:Card');
        grunt.task.run('sync_dataset:debit:Debit');
        grunt.task.run('sync_dataset:receipt1:Receipt 1');
        grunt.task.run('sync_dataset:permit:Permit');
        grunt.task.run('sync_dataset:lmi:LMI');
        grunt.task.run('sync_dataset:market_dynamics:Market Dynamics');
        grunt.task.run('sync_dataset:sub_tracker:Sub Tracker');
        grunt.task.run('sync_dataset:receipt2:Receipt 2');
        grunt.task.run('sync_dataset:mall:Mall');
	});

	return {
		sync: buildConfig
	};
};