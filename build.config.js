/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {

    /**
     * 1010data credentials
     */
    login: {
        gateway: 'https://www2.1010data.com/beta-latest/gw',
        id: '',
        password: ''
    },

    quickapps: {
        hello_world: {
            container: 'src/app/hello.world.html',
            url: '',
            table: ''
        }
        /**
         * example:
         *    hello_world: {
         *       container: 'src/app/hello.world.html',
         *       url: 'https://www2.1010data.com/cgi-bin/beta-latest/quickapp?path=pub.consumer_data.oi.internal.workspace.jamie_cristini.MyTendoTest2',
         *       table: 'pub.consumer_data.oi.internal.workspace.jamie_cristini.MyTendoTest2\(MyTendoTest2\;\;\)=default.lonely'
         *   }
         *
         *
         */
    },

    /**
     * The `build_dir` folder is where the projects html files are compiled too
     */
    build_dir: 'build',
    app: 'src/app',

    app_files: {
        html: ['<%= quickapps.hello_world.container %>'],
        quickapps: ['src/app/**/*.xml'],
        queries: ['src/queries/**/*.xml']
    },

    grunt_files: {
        js: ['Gruntfile.js', 'tasks/**/*.js', 'build.config.js']
    },

    config_files: {
        project: 'build.config.js'
    }
};
