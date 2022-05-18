const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHROOT = './public/assets/';

const extractSass = new ExtractTextPlugin({
    filename: '../css/[name].css'
});

const notification = new WebpackNotifierPlugin({
    title: 'CSK-FrontEnd',
    alwaysNotify: true
    // contentImage: path.join(__dirname, 'logo.png')
});

function getPlugin() {
    if (process.env.NODE_ENV === 'production') {
        return [
            notification,
            extractSass,
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new webpack.optimize.UglifyJsPlugin()
        ];
    } else {
        return [
            notification,
            extractSass,
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ];
    }
}

config = {
    entry: {
        main: ['./resources/assets/js/app.js', './resources/assets/sass/app.scss']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, PATHROOT + '/js')
    },
    resolve: {
        extensions: ['.js'],
        alias: {

        }
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../images/'
                    }
                }]
            }
        ]
    },
    plugins: getPlugin()
};

module.exports = config;