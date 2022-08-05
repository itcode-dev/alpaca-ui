const path = require("path");

module.exports = {
  "core": {
    builder: 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "webpackFinal": async config =>
  {
    config.resolve.alias["@alpaca"] = path.resolve(__dirname, "../src");

    return config;
  }
}