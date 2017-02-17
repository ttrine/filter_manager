beforeEach(function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    var _ = require('lodash');
    var tendo = require('tendo');

    function asJson(value, newLineDelimiter, colDelimiter) {
        var nd = newLineDelimiter || /\r\n|\n/;
        var cd = colDelimiter || ',';

        var lines = value.split(nd);
        var header = lines[0].split(cd);
        return _.chain(lines)
            .tail()
            .filter(function emptyRows(l) {
                return l.trim().length > 0
            })
            .map(function asObject(l) {
                var ar = l.split(cd);
                return _.reduce(ar, function (memo, v, index) {
                    memo[header[index]] = v;
                    return memo;
                }, {});
            })
            .value();
    }

    this.tendo = tendo;

    this.query = function (options, file, callback) {
        var defaultOptions = {
            login: {
                'TENTENGW': '<%= login.gateway %>',
                'TENTENUID': '<%= login.id %>',
                'TENTENPW': '<%= login.password %>'
            },
            args: '-K',
            logResults: true,
            logTenDoCmd: false,
            table: 'default.lonely',
            isInlineQuery: false
        };

        var opts = _.extend(defaultOptions, options);
        var query = (opts.isInlineQuery === true) ? file.replace(/"/g, '\\"') : '@' + process.env.project_dir + '/' + file;
        tendo.execute(opts, [query], function (status, results) {
            if (status === false) {
                expect("query").toBe("successful", results);
                return;
            }

            callback(results[0]);
        });
    };

    this.queryToJson = function (options, file, callback) {
        options.args = options.args ? options.args + ' -h' : '-K -h';
        this.query(options, file, function (results) {
            callback(asJson(results))
        });
    };
});

