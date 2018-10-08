const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[hash].js',
        publicPath: '/',
        chunkFilename: 'js/[name].[hash].js',
    },
    resolve: {
        alias: {
            react: 'anujs/dist/ReactIE.js',
            'react-dom': 'anujs/dist/ReactIE.js',
            router: "anujs/dist/Router.js",
            'prop-types': 'anujs/lib/ReactPropTypes',
            devtools: 'anujs/lib/devtools',
            'create-react-class': 'anujs/lib/createClass',
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
});
