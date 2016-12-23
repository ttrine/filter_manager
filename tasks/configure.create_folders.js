module.exports = function (grunt) {
    var buildConfig = require('../build.config.js');
    var _ = require('lodash');

    grunt.registerMultiTask('create_folders', 'Create 1010 folders from quick_queries', function () {
        var options = this.options({}, this.data);
        var index = 0;
        var quickQueries = grunt.config('quick_queries');
        var folders = _.chain(quickQueries)
            .map(function (o) {
                var file = o.table.substring(0, o.table.indexOf('('));
                var path = file.substring(0, file.lastIndexOf('.'));
                var parent = path.substring(0, path.lastIndexOf('.'));
                return {
                    index: index++,
                    parent: parent,
                    path: path,
                    title: o.title || path.substring(path.lastIndexOf('.') + 1)
                }
            })
            .uniqBy('path')
            .value();

        var parentFolders = _.reduce(folders[0].parent.split('.'), function (acc, obj, name) {
            var path = (acc.path.length > 0) ? acc.path + '.' + obj : obj;
            var parent = (acc.path.length > 0) ? acc.path : '0';
            acc.folders.push({
                index: index++,
                parent: parent,
                path: path,
                title: obj
            });
            acc.path = path;
            return acc;
        }, {folders: [], path: ""});

        folders = parentFolders.folders.concat(folders);

        var template = grunt.file.read(options.template);
        var content = folders.reduce(function (acc, folder) {
            acc += grunt.template.process(template, {
                data: {
                    index: folder.index,
                    parent_folder: folder.parent,
                    folder: folder.path,
                    title: folder.title,
                    users: options.users
                }
            });
            return acc;
        }, "");

        grunt.file.write(options.dest, '<dynamic><note>' + new Date() + '</note>' + content + '</dynamic>');
    });

    return {
        build: buildConfig.init_queries.create_folders
    };
};