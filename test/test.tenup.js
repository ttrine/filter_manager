var tenup = require('../node_modules/tenup/tenup');

var options = 
	{
		gateway: 'https://www2.1010data.com/cgi-bin/gw.k',
		user: 'ttrine',
		password: 'password',
		source: 'product_filter_manager.system_data.companies',
		table: 'x1010data.ttrine.filter_manager_dev.system_data.companies',
		title: 'Companies'
	};

tenup.execute(options, function (status, results) {
    if (status === false) {
        console.log("fail: "+results);
        process.exit(1);
    }

    console.log(results);

    process.exit(0);
});