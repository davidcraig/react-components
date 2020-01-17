// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  ignore: [
    "**/*.test.js",
    "**/*.spec.js"
  ],
  plugins: ["react-docgen"]
};
