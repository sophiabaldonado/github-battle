const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app/index.js',
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	plugins: [new HTMLWebpackPlugin({
		template: './app/index.html'
	})]
}
