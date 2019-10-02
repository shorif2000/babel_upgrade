const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/docs',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: [ '@babel/preset-react' ],
                    plugins: [ '@babel/transform-runtime', '@babel/transform-regenerator' ]
                }
            },            
             {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2) (\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: true
        }),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                'REACT_APP_GA_TRACKING_ID' : JSON.stringify('UA-101927425-1'),
                'VERSION': JSON.stringify('57')
            }
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",            
            jquery: 'jquery'
        }),
        
        new ExtractTextPlugin("[name].bundle.css")
    ],
    devtool: 'source-map',
    externals: [],
};


