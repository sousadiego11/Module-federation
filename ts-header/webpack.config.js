const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const ProvidePlugin = require('webpack').ProvidePlugin

const deps = require('./package.json').dependencies

module.exports = ({ mode = 'development' }) => ({
    mode: mode,
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name][hash].js',
			publicPath: mode === 'development' ? 'http://localhost:3002/' :  'https://webpack5-modulefed-remote.netlify.app/'
    },
    devServer: {
			open: true,
			port: 3002,
			allowedHosts: 'all'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html'), inject: true }),
				new ProvidePlugin({
					'React': 'react'
				}),
				new ModuleFederationPlugin({
					name: 'HeaderRemote',
					filename: 'remoteEntry.js',
					exposes: {
						'./Header': './src/components/Header'
					},
					shared: {
						react: {
							singleton: true,
							requiredVersion: deps.react
						},
						'react-dom': {
							singleton: true,
							requiredVersion: deps['react-dom']
						},
					}
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
