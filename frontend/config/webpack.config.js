/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = () => {
	return merge([
		{
			stats: 'errors-only',
			resolve: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				alias: {
					modules: __dirname + '/node-modules',
				},
			},
			devtool: 'source-map',
			devServer: {
				hotOnly: true,
			},
			module: {
				rules: [
					{
						test: /\.js[x]?$/,
						exclude: /node_modules/,
						use: [
							{
								loader: 'babel-loader',
								options: { cacheDirectory: true, compact: false },
							},
						],
					},
					{
						test: /\.ts[x]?$/,
						use: [
							{
								loader: 'awesome-typescript-loader',
							},
						],
					},
					{
						test: /\.(css|scss)$/,
						use: ['style-loader', 'css-loader', 'sass-loader'],
					},
					{
						test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
						use: [
							{
								loader: 'file-loader',
								options: {
									outputPath: 'images/',
								},
							},
						],
					},
				],
			},
			plugins: [
				new Dotenv(),
				new HtmlWebpackPlugin({
					template: './src/index.html',
					filename: './index.html',
				}),
			],
		},
	])
}
