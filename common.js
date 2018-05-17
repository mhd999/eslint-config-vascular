module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
      "import"
    ],
    "rules": {
      "camelcase": 0,
      "linebreak-style": 0,
      "no-shadow": 0,
      "no-param-reassign": 0,
      "max-len": 0,
      "no-plusplus": 0,
      "import/prefer-default-export": 0,
      "no-confusing-arrow": 0,
      "arrow-body-style": 0,
      "global-require": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
    },
    "globals": {
      "document": true,
      "window": true,
      "require": true,
      "fetch": true
    }
  }
