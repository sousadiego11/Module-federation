const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const { ModuleFederationPlugin } = require('webpack').container
const ProvidePlugin = require('webpack').ProvidePlugin
const deps = require('./package.json').dependencies

module.exports = ({ mode = 'development' }) => ({
    mode,
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
				assetModuleFilename: 'assets/[hash][ext][query]',
				publicPath: mode === 'development' ? 'http://localhost:3002/' :  'https://webpack5-modulefed.vercel.app/'
    },
    devServer: {
        port: 3001,
        open: true,
        allowedHosts: 'all'
    },
    module: {
        rules: [
            {
							test: /\.jsx?$/i,
							exclude: /node_modules/i,
							loader: 'babel-loader',
							options: {
									presets: ['@babel/preset-react']
							}
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
						{
							test: /\.(png|svg|jpg|jpeg|gif)$/i,
							type: 'asset/resource'
						}
        ]
    },
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		},
    plugins: [ 
			new HtmlWebpackPlugin({ template: './src/public/index.html', inject: true }),
			new ProvidePlugin({
				'React': 'react'
			}),
			new ModuleFederationPlugin({
				name: 'Main',
				filename: 'remoteEntry.js',
				remotes: {
					HeaderRemote: mode === 'development' ? 'HeaderRemote@http://localhost:3002/remoteEntry.js' : 'HeaderRemote@hhttps://webpack5-modulefed-remote.vercel.app/remoteEntry.js'
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
    devtool: 'source-map'
})
