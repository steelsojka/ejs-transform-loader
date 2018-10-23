const loaderUtils = require('loader-utils');
const schemaUtils = require('schema-utils');
const _ = require('lodash');

const schema = {
  type: 'object',
  properties: {
    buildOptions: { type: 'object', required: false },
    data: {
      type: 'object',
      additionalProperties: true,
      required: true
    }
  },
  additionalProperties: false
}

module.exports = function(input) {
  const options = loaderUtils.getOptions(this);
  const template = _.template(input, options.buildOptions || {});

  schemaUtils.validateOptions(schema, options, 'ejs-transform-loader');

  return template(options.data);
};