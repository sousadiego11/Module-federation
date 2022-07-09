const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    mode,
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
				assetModuleFilename: 'assets/[hash][ext][query]'
    },
    devServer: {
        port: 3005,
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
			extensions: ['.js', '.jsx']
		},
    plugins: [ new HtmlWebpackPlugin({ template: './src/public/index.html', inject: true }) ],
    devtool: 'source-map'
}
