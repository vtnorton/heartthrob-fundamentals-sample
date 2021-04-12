/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const baseConfig = require('./webpack.config')

const prodConfig = () => {
	return merge([
		{
			mode: 'production',
			optimization: {
				runtimeChunk: 'single',
				splitChunks: {
					cacheGroups: {
						vendor: {
							test: /[\\/]node_modules[\\/]/,
							name: 'vendors',
							chunks: 'all',
						},
					},
				},
				minimizer: [new TerserPlugin()],
			},
			plugins: [
				new Dotenv({
					path: './.env.prod',
					silent: false,
				}),
				new OptimizeCssAssetsPlugin(),
			],
		},
	])
}

module.exports = (env) => {
	return merge(prodConfig(env), baseConfig(env))
}
