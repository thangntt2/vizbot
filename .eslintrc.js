module.exports = {
  "extends": "eslint-config-airbnb",
  "ecmaFeatures": {
    globalReturn: true
  },
  "parser": "babel-eslint",
  "rules": {
    "no-console": [0],
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "no-else-return": [0],
    "semi": [2, "never"],
    "import/prefer-default-export": [0],
    "arrow-body-style": [0],
  },
  "globals": {
    "__CLIENT__": true,
    "__SERVER__": true,
    "__PRODUCTION__": true,
    "__DEV__": true,
    "document": false,
    "escape": false,
    "navigator": false,
    "unescape": false,
    "window": false,
    "describe": true,
    "before": true,
    "after": true,
    "it": true,
  }
};
