const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const _ = require('lodash');

const schema = {
  type: 'object',
  properties: {
    buildOptions: { type: 'object' },
    data: {
      type: 'object',
      additionalProperties: true
    }
  },
  required: [ 'data' ],
  additionalProperties: false
}

module.exports = function(input) {
  const options = loaderUtils.getOptions(this);
  const template = _.template(input, options.buildOptions || {});

  validateOptions(schema, options, 'ejs-transform-loader');

  return template(options.data);
};