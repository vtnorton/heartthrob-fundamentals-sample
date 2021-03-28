const { merge } = require('webpack-merge')
const dotenv = require('dotenv-webpack')

import baseConfig from './webpack.base.config'

const devConfig = () => {
	return merge([
		{
			mode: 'development',
			plugins: [new dotenv({ path: '.env.development' })],
		},
	])
}

module.exports = (env) => {
	return merge(baseConfig(env), devConfig(env))
}
