/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * The `build_dir` folder is where the projects html files are compiled too
	 */
	build_dir: 'build',
	app_dir: 'src/app',

	/**
	 * 1010data credentials
	 */
	login: {
		gateway: '<%= login_gateway %>',
		id: '<%= login_id %>',
		password: '<%= login_password %>'
	},

	root_path: 'x1010data.ttrine.filter_manager_dev',
	basetable: 'default.lonely',

	init_queries: {
		create_folders: {
			table: '<%= basetable %>',
			template: 'src/_init/template_create_folders.xml',
			dest: '<%= build_dir %>/_init/create_folders.xml', // tokenize template to dest using 'template' task
			users: 'inherit',
			options: {
				args: '-k' // force a new session which ensures folder caches are cleared
			}
		}
	},

	quick_queries: {
		view: {
			container: '<%= app_dir %>/view.html',   // html iframe container
			src: '<%= app_dir %>/view.xml',
			dest: '<%= build_dir %>/app/view.xml',  // tokenize src to dest using 'template' task
			title: 'Filter Manager',
			name: '<%= root_path %>.view',
			url: 'https://www2.1010data.com/cgi-bin/beta-latest/quickapp?path=<%= quick_queries.view.name %>',
			table: '<%= quick_queries.view.name %>\(<%= quick_queries.view.title %>\;\;\)=<%= basetable %>',
			ordinal: 99 // deploy last because there are dependencies which must be deployed beforehand
		},

		model: {
			src: '<%= app_dir %>/model.xml',
			dest: '<%= build_dir %>/app/model.xml',  // tokenize src to dest using 'template' task
			title: 'Model',
			name: '<%= root_path %>.model',
			url: 'https://www2.1010data.com/cgi-bin/beta-latest/quickapp?path=<%= quick_queries.model.name %>',
			table: '<%= quick_queries.model.name %>\(<%= quick_queries.model.title %>\;\;\)=<%= basetable %>'
		},

		controller: {
			src: '<%= app_dir %>/controller.xml',
			dest: '<%= build_dir %>/app/controller.xml',  // tokenize src to dest using 'template' task
			title: 'Controller',
			name: '<%= root_path %>.controller',
			url: 'https://www2.1010data.com/cgi-bin/beta-latest/quickapp?path=<%= quick_queries.controller.name %>',
			table: '<%= quick_queries.controller.name %>\(<%= quick_queries.controller.title %>\;\;\)=<%= basetable %>'
		}
	},

	env_configs: {
		developer: {
            root_path: 'x1010data.ttrine.filter_manager_dev',
            login: {
                gateway: 'https://www2.1010data.com/beta-latest/gw',
                id: '<%= login_id %>',
                password: '<%= login_password %>'
            }
		},

		test: {
			root_path: 'product_filter_manager',
			login: {
				gateway: 'http://njtest.corp.1010data.com/beta-latest/gw',
				id: '<%= login_id %>',
				password: '<%= login_password %>'
			}
		},

		prod: {
			root_path: 'product_filter_manager',
			login: {
				gateway: 'https://www2.1010data.com/beta-latest/gw',
				id: '<%= login_id %>',
				password: '<%= login_password %>'
			}
		}
	}
};
