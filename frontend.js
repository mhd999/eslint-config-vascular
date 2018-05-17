const mergeDeep = require('merge-deep');

const common = require('./common');

const config = {
  "plugins": [
    "react",
    "jsx-a11y",
  ],
  "env": {
    "jest": true
  },
  "rules": {
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-wrap-multilines": 0,
  },
};

module.exports = mergeDeep({}, config, common);
