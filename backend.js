const mergeDeep = require('merge-deep');

const common = require('./common');

const config = {
  "env": {
    "node": true,
    "mocha": true
  }
};

module.exports = mergeDeep({}, common, config);
