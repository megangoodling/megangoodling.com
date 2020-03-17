const webpackConfig = require('./webpackConfig')
const jestConfig = require('./jestConfig')

module.exports = {
    jest: jestConfig,
    reactScriptsVersion: 'react-scripts',
    webpack: webpackConfig
}