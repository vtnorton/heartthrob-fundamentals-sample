const { merge } = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

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
				new MiniCssExtractPlugin(),
				new OptimizeCssAssetsPlugin(),
			],
		},
	])
}

module.exports = (env) => {
	return merge(baseConfig(env), prodConfig(env))
}
