/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * `build_dir`: folder to which html files compile
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

	root_path: 'x1010data.huangc.filter_manager_dev',
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

    root_sql_path: 'product_filter_manager',

    data_tables: {
        companies: {
            table_name: 'system_data.companies',
            title: 'Companies'
        },
        access: {
            table_name: 'system_data.access',
            title: 'Access'
        },
        hierarchies: {
            table_name: 'system_data.hierarchies',
            title: 'Hierarchies'
        },
        raw_hierarchies: {
            table_name: 'system_data.raw_hierarchies',
            title: 'Raw Hierarchies'
        },
        filters: {
            table_name: 'system_data.filters',
            title: 'Filters'
        },
        card_raw_hierarchy: {
            table_name: 'dataset_configs.card.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        debit_raw_hierarchy: {
            table_name: 'dataset_configs.debit.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        receipt1_raw_hierarchy: {
            table_name: 'dataset_configs.receipt1.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        permit_raw_hierarchy: {
            table_name: 'dataset_configs.permit.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        lmi_raw_hierarchy: {
            table_name: 'dataset_configs.lmi.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        market_dynamics_raw_hierarchy: {
            table_name: 'dataset_configs.market_dynamics.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        sub_tracker_raw_hierarchy: {
            table_name: 'dataset_configs.sub_tracker.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        receipt2_raw_hierarchy: {
            table_name: 'dataset_configs.receipt2.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        mall_raw_hierarchy: {
            table_name: 'dataset_configs.mall.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        peeriq_raw_hierarchy: {
            table_name: 'dataset_configs.peeriq.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        card_companies: {
            table_name: 'dataset_configs.card.companies',
            title: 'Companies'
        },
        debit_companies: {
            table_name: 'dataset_configs.debit.companies',
            title: 'Companies'
        },
        receipt1_companies: {
            table_name: 'dataset_configs.receipt1.companies',
            title: 'Companies'
        },
        permit_companies: {
            table_name: 'dataset_configs.permit.companies',
            title: 'Companies'
        },
        lmi_companies: {
            table_name: 'dataset_configs.lmi.companies',
            title: 'Companies'
        },
        market_dynamics_companies: {
            table_name: 'dataset_configs.market_dynamics.companies',
            title: 'Companies'
        },
        sub_tracker_companies: {
            table_name: 'dataset_configs.sub_tracker.companies',
            title: 'Companies'
        },
        receipt2_companies: {
            table_name: 'dataset_configs.receipt2.companies',
            title: 'Companies'
        },
        mall_companies: {
            table_name: 'dataset_configs.mall.companies',
            title: 'Companies'
        },
        peeriq_companies: {
            table_name: 'dataset_configs.peeriq.companies',
            title: 'Companies'
        },
        companies_transaction_log: {
            table_name: 'audit.system_data.companies_transaction_log',
            title: 'Companies Transaction Log'
        },
        access_transaction_log: {
            table_name: 'audit.system_data.access_transaction_log',
            title: 'Access Transaction Log'
        },
        hierarchies_transaction_log: {
            table_name: 'audit.system_data.hierarchies_transaction_log',
            title: 'Hierarchies Transaction Log'
        },
        companies_archive: {
            table_name: 'audit.system_data.companies_archive',
            title: 'Companies Archive'
        },
        access_archive: {
            table_name: 'audit.system_data.access_archive',
            title: 'Access Archive'
        },
        hierarchies_archive: {
            table_name: 'audit.system_data.hierarchies_archive',
            title: 'Hierarchies Archive'
        },
        card_transaction_log: {
            table_name: 'audit.dataset_configs.card_transaction_log',
            title: 'card Transaction Log'
        },
        debit_transaction_log: {
            table_name: 'audit.dataset_configs.debit_transaction_log',
            title: 'debit Transaction Log'
        },
        receipt1_transaction_log: {
            table_name: 'audit.dataset_configs.receipt1_transaction_log',
            title: 'receipt1 Transaction Log'
        },
        permit_transaction_log: {
            table_name: 'audit.dataset_configs.permit_transaction_log',
            title: 'permit Transaction Log'
        },
        lmi_transaction_log: {
            table_name: 'audit.dataset_configs.lmi_transaction_log',
            title: 'lmi Transaction Log'
        },
        market_dynamics_transaction_log: {
            table_name: 'audit.dataset_configs.market_dynamics_transaction_log',
            title: 'market_dynamics Transaction Log'
        },
        sub_tracker_transaction_log: {
            table_name: 'audit.dataset_configs.sub_tracker_transaction_log',
            title: 'sub_tracker Transaction Log'
        },
        receipt2_transaction_log: {
            table_name: 'audit.dataset_configs.receipt2_transaction_log',
            title: 'receipt2 Transaction Log'
        },
        mall_transaction_log: {
            table_name: 'audit.dataset_configs.mall_transaction_log',
            title: 'mall Transaction Log'
        },
        peeriq_transaction_log: {
            table_name: 'audit.dataset_configs.peeriq_archive',
            title: 'peeriq Archive'
        },
        card_archive: {
            table_name: 'audit.dataset_configs.card_archive',
            title: 'card Archive'
        },
        debit_archive: {
            table_name: 'audit.dataset_configs.debit_archive',
            title: 'debit Archive'
        },
        receipt1_archive: {
            table_name: 'audit.dataset_configs.receipt1_archive',
            title: 'receipt1 Archive'
        },
        permit_archive: {
            table_name: 'audit.dataset_configs.permit_archive',
            title: 'permit Archive'
        },
        lmi_archive: {
            table_name: 'audit.dataset_configs.lmi_archive',
            title: 'lmi Archive'
        },
        market_dynamics_archive: {
            table_name: 'audit.dataset_configs.market_dynamics_archive',
            title: 'market_dynamics Archive'
        },
        sub_tracker_archive: {
            table_name: 'audit.dataset_configs.sub_tracker_archive',
            title: 'sub_tracker Archive'
        },
        receipt2_archive: {
            table_name: 'audit.dataset_configs.receipt2_archive',
            title: 'receipt2 Archive'
        },
        mall_archive: {
            table_name: 'audit.dataset_configs.mall_archive',
            title: 'mall Archive'
        },
        peeriq_archive: {
            table_name: 'audit.dataset_configs.peeriq_archive',
            title: 'peeriq Archive'
        },
        filters_archive: {
            table_name: 'audit.system_data.filters_archive',
            title: 'Filters Archive'
        },
        oi_fi_companies: {
            table_name: 'dataset_configs.oi_fi.companies',
            title: 'Companies'
        },
        oi_fi_raw_hierarchy: {
            table_name: 'dataset_configs.oi_fi.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        card_canada_companies: {
            table_name: 'dataset_configs.card_canada.companies',
            title: 'Companies'
        },
        card_canada_raw_hierarchy: {
            table_name: 'dataset_configs.card_canada.raw_hierarchy',
            title: 'Raw Hierarchy'
        },
        sector_companies: {
            table_name: 'dataset_configs.sector.companies',
            title: 'Companies'
        },
        sector_raw_hierarchy: {
            table_name: 'dataset_configs.sector.raw_hierarchy',
            title: 'Raw Hierarchy'
        }
    },

	quick_queries: {
		view: {
			container: '<%= app_dir %>/view.html',   // html iframe container
			src: '<%= app_dir %>/view.xml',
			dest: '<%= build_dir %>/app/view.xml',  // tokenize src to dest using 'template' task
			title: 'Filter Manager',
			name: '<%= root_path %>.view',
			url: 'https://www2.1010data.com/cgi-bin/prime-latest/quickapp?path=<%= quick_queries.view.name %>',
			table: '<%= quick_queries.view.name %>\(<%= quick_queries.view.title %>\;\;\)=<%= basetable %>',
			ordinal: 99 // deploy last because there are dependencies which must be deployed beforehand
		},

		model: {
			src: '<%= app_dir %>/model.xml',
			dest: '<%= build_dir %>/app/model.xml',  // tokenize src to dest using 'template' task
			title: 'Model',
			name: '<%= root_path %>.model',
			url: 'https://www2.1010data.com/cgi-bin/prime-latest/quickapp?path=<%= quick_queries.model.name %>',
			table: '<%= quick_queries.model.name %>\(<%= quick_queries.model.title %>\;\;\)=<%= basetable %>'
		},

		controller: {
			src: '<%= app_dir %>/controller.xml',
			dest: '<%= build_dir %>/app/controller.xml',  // tokenize src to dest using 'template' task
			title: 'Controller',
			name: '<%= root_path %>.controller',
			url: 'https://www2.1010data.com/cgi-bin/prime-latest/quickapp?path=<%= quick_queries.controller.name %>',
			table: '<%= quick_queries.controller.name %>\(<%= quick_queries.controller.title %>\;\;\)=<%= basetable %>'
		}
	},

	env_configs: {
		developer: {
            root_path: 'x1010data.huangc.filter_manager_dev',
            login: {
                gateway: 'https://www2.1010data.com/prime-latest/gw',
                id: '<%= login_id %>',
                password: '<%= login_password %>'
            }
		},

		test: {
			root_path: 'product_filter_manager',
			login: {
				gateway: 'http://njtest.corp.1010data.com/prime-latest/gw',
				id: '<%= login_id %>',
				password: '<%= login_password %>'
			}
		},

		prod: {
			root_path: 'product_filter_manager',
			login: {
				gateway: 'https://www2.1010data.com/prime-latest/gw',
				id: '<%= login_id %>',
				password: '<%= login_password %>'
			}
		}
	}
};
