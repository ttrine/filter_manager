/**
 * Create config which uses the 'env' overrides based on cmd line option: 'env'
 * example:
 *    grunt -env=ci deploy
 */
module.exports = function (grunt) {
  var buildConfig = require('./build.config.js');
  var _ = require('lodash');

  var env = grunt.option('env') || 'developer';
  var overrides = buildConfig.env_configs[env] || {};

  return _.extend(
    buildConfig,
    overrides, {
      env: env
    }
  );
};
