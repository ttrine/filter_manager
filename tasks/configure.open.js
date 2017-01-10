module.exports = function (grunt) {
  return {

    localhost: {
      path: 'http://localhost:8081/hello.world.html',
      app: 'Chrome'
    },

    quickapp: {
      path: '<%= quick_queries.hello_world.url %>',
      app: 'Chrome'
    }
  };
};