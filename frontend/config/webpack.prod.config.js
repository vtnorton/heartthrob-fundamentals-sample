const { merge } = require('webpack-merge')

const prodConfig = require('./../node_modules/heartthrob-fundamentals/config/webpack.prod.config')
const baseConfig = require('./../node_modules/heartthrob-fundamentals/config/webpack.config')

module.exports = (env) => {
	return merge(prodConfig(env), baseConfig(env))
}