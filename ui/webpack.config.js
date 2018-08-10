const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {

    const _DEV_ = argv.mode === 'development';

    return {
        context: path.resolve(__dirname),
        entry: _DEV_ ? [
            'react-hot-loader/patch',
            './src/app/main.js'
        ] : [
            './src/app/main.js'
        ],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: _DEV_ ? 'js/[name].bundle.js' : 'js/[name].[hash].bundle.js',
            chunkFilename: _DEV_ ? 'js/[id].chunk.js' : 'js/[id].[chunkhash].chunk.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    query: {
                        "presets": [
                            ["es2015", {"modules": false}],
                            "stage-2",
                            "react"
                        ],
                        "plugins": ["react-hot-loader/babel"]
                    },
                    exclude: [/node_modules/]
                },
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
                {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader'}
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"],
            modules: [
                path.resolve(__dirname, 'src/app'),
                'node_modules'
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
            new webpack.DefinePlugin({
                __ROOTURL__: process.env['ROOTURL'],
                __APIURL__: process.env['APIURL'],
                __GITHUB_URL__: process.env['GITHUB_URL'],
                __GITHUB_API_URL__: process.env['GITHUB_API_URL'],
                __CLIENT_ID__: process.env['CLIENT_ID'],
            }),
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([
                {from: './src/index.html'},
                {from: './src/assets', to: './assets'}
            ]),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                chunksSortMode: 'dependency'
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
