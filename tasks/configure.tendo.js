module.exports = function (grunt) {
    return {
        options: {
            login: {
                'TENTENGW': '<%= login.gateway %>',
                'TENTENUID': '<%= login.id %>',
                'TENTENPW': '<%= login.password %>'
            },
            args: '-K -y',
            logResults: true,
            logTenDoCmd: true
        },

        upload: {
            table: '<%= quickapps.hello_world.table %>',
            src: ['<%= app_files.quickapps %>'],
            options: {
                args: '-K -y --query -[[DATE_TEST]]="' + new Date().toString() + '"',
                logResults: false
            }
        },

        query: {
            table: 'pub.demo.weather.pwcodes',
            src: ['<%= app_files.queries %>']
        },

        inline_query: {
            table: 'pub.demo.weather.pwcodes',
            inlineQuery: '.'
        }
    }
};
