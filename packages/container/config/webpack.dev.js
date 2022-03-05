const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
	devtool: 'eval-cheap-source-map',
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8080/',
	},
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: '/index.html',
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				vacancy: 'vacancy@http://localhost:8081/remoteEntry.js',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
