module.exports = function (grunt) {
	var buildConfig = require('../env.config.js')(grunt);
	var tenup = require('../node_modules/tenup/tenup');
	var _ = require('lodash');

	grunt.registerTask('sync_one', 'Pull table from prod and push to specified environment', function (table_name, table_title){
		var options = 
			{
				gateway: grunt.config.data.login_gateway,
				user: grunt.config.data.login_id,
				password: grunt.config.data.login_password,
				source: 'product_filter_manager.' + table_name,
				table: grunt.config.data.root_path + '.' + table_name,
				title: table_title
			};

		var done = this.async();
		tenup.execute(options, function (status, results) {
			if (status === false) {
				console.log("fail: "+results);
				process.exit(1);
			}

			console.log(results);

			done();
		});
	});

	grunt.registerTask('sync', 'Pull all system tables from prod and push to specified environment', function () {
		grunt.task.run('sync_one:system_data.access:Access');
		// sync_one:system_data.filters:Filters
	});

	return {
		sync: buildConfig
	};
};