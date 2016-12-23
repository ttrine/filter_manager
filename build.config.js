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

    root_path: 'pub.consumer_data.oi.internal.workspace.<%= login.id %>.hello_world',
    basetable: 'default.lonely',

    init_queries: {
        create_folders: {
            table: '<%= basetable %>',
            template: 'src/_init/template_create_folders.xml',
            dest: '<%= build_dir %>/_init/create_folders.xml',
            users: 'oi_internal_users',
            options: {
                args: '-k' // force a new session which ensures folder caches are cleared
            }
        }
    },

    quick_queries: {
        hello_world: {
            container: '<%= app_dir %>/hello.world.html',
            src: '<%= app_dir %>/hello.world.xml',
            dest: '<%= build_dir %>/app/hello.world.xml',  // tokenize using 'replace' task
            title: 'Hello World Example App',
            name: '<%= root_path %>.main',
            url: 'https://www2.1010data.com/cgi-bin/beta-latest/quickapp?path=<%= quick_queries.hello_world.name %>',
            table: '<%= quick_queries.hello_world.name %>\(<%= quick_queries.hello_world.title %>\;\;\)=<%= basetable %>'
        },

        lib1: {
            table: '<%=root_path%>.lib1.lib1\(Library 1\;\;\)=<%= basetable %>',
            src: ['<%= app_dir %>/lib1/lib1.xml']
        },

        lib2: {
            table: '<%=root_path%>.lib2.lib2\(Library 2\;\;\)=<%= basetable %>',
            src: ['<%= app_dir %>/lib2/lib2.xml'],
            options: {
                args: '-K -y --query -[[DATE_TEST]]="' + new Date().toString() + '"'
            }
        }
    }
};
