const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = ({ mode }) => ({
    mode: mode ?? 'development',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name][hash].js'
    },
    devServer: {
			open: true,
			port: 3001,
			allowedHosts: 'all'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html'), inject: true }),
				new webpack.ProvidePlugin({
					'React': 'react'
				})
    ],
    module: {
			rules: [
				{
					test: /\.jsx?$/i,
					loader: 'babel-loader',
					include: path.resolve(__dirname, 'src')
				},
				{
					test: /\.tsx?$/i,
					loader: 'ts-loader',
					include: path.resolve(__dirname, 'src')
				},
				{
						test: /\.css$/,
						use: ['style-loader', 'css-loader']
				}
			]
		},
    resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
})
