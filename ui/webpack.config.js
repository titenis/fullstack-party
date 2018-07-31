const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => {

    const _DEV_ = mode === 'development';

    return {
        context: path.resolve(__dirname),
        entry: ['./src/app/main.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        _DEV_ ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => ([
                                    require('precss'),
                                    require('autoprefixer')
                                ])
                            }
                        },
                        'sass-loader',
                    ],
                },
                // {test: /\.scss$/, use: [
                //     {loader: 'style-loader'},
                //     {loader: 'css-loader'},
                //     {
                //         loader: 'postcss-loader',
                //         options: {
                //             plugins: () => ([
                //                 require('precss'),
                //                 require('autoprefixer')
                //             ])
                //         }
                //     },
                //     {loader: 'sass-loader'}
                // ]},
                {test: /\.(jpe?g|png|gif)$/, loader: 'file-loader', query: {name: 'assets/img/[name].[ext]'}},
            ]
        },
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
                {from: './src/html'},
                {from: './src/index.html'},
                {from: './src/assets', to: './assets'}
            ]),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html')
            }),
            new HtmlWebpackPlugin({
                filename: 'login.html',
                template: path.resolve(__dirname, 'src/html/login.html')
            }),
            new HtmlWebpackPlugin({
                filename: 'list.html',
                template: path.resolve(__dirname, 'src/html/list.html')
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
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
