const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

    const _DEV_ = env === 'development';

    return {
        context: path.resolve(__dirname),
        entry: ['./src/app/main.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/'
        },
        module: {},
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            host: '0.0.0.0',
            port: 2201,
            stats: "minimal",
            historyApiFallback: true,
            disableHostCheck: true,
            https: false,
            hot: true
        },
        watchOptions: {
            // In Docker/VirtualBox env watch DOES NOT work without this setting
            poll: true,
            ignored: '/node_modules/'
        },

        plugins: [
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([
                {from: './src/index.html'},
                {from: './src/assets', to: './assets'}
            ]),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html')
            })
        ].concat(_DEV_
            ? [
                new webpack.NamedModulesPlugin(),
                new webpack.HotModuleReplacementPlugin()
            ]
            : []
        )
    }
};
